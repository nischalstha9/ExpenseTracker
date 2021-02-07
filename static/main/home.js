$(function () {
  function getBalance() {
    $.ajax({
      url: "/mybalance/",
      success: function (result) {
        $("#balance_amt").html(result.balance);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  getBalance();
  //CSRF FUNCTION
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== "") {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) === name + "=") {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  }
  const csrftoken = getCookie("csrftoken");

  //TABLE DATA RETRIEVER
  function getTableData(page = 1, trans_type = "", date = ", ", search = "") {
    if (date != ", ") {
      var url = `${window.location.protocol}//${window.location.host}/my-tasks/?page=${page}&_type=${trans_type}&date__date__range=${date}&search=${search}`;
    } else {
      var url = `${window.location.protocol}//${window.location.host}/my-tasks/?page=${page}&_type=${trans_type}&search=${search}`;
    }
    $.ajax({
      url: url,
      success: function (result) {
        console.log(result);
        var tdata = "";
        trans = result.results;
        pages = Math.ceil(result.count / 10);
        if (pages >= 1) {
          paginationHtml(pages);
        }
        $.each(trans, function (index, tran) {
          var style = tran._type == "DEBIT" ? "table-success" : "table-danger";
          tdata += `<tr class="${style}" id='${tran.id}'>
                  <th scope="row">${tran.date}</th>
                  <td>${tran.description}</td>
                  <td>${tran.amount}</td>
                  <td>
                      <div class="btn-group btn-group-small">
                          <button class='btn btn-small tran-edit' data-id='${tran.id}' data-desc='${tran.description}' data-amount='${tran.amount}' data-type='${tran._type}'>&#9998;</button>
                          
                      </div>
                  </td>
              </tr>`;
        });
        $("#tbody").html(tdata);
      },
      error: function (err) {
        console.log(err);
      },
    });
  }
  getTableData();

  //FILTERS
  var search = "";
  var page = 1;
  var trans_type = "";
  var sdate = "";
  var edate = "";
  var date = sdate + ", " + edate;
  $("#Transasction_Filter").change(function (e) {
    page = 1;
    trans_type = e.target.value;
    getTableData(page, trans_type, date, search);
  });
  $("#sdate-filter").change(function (e) {
    page = 1;
    sdate = e.target.value;
    if (edate == "" || edate < sdate) {
      edate = sdate;
    }
    date = sdate + ", " + edate;
    getTableData(page, trans_type, date, search);
  });
  $("#edate-filter").change(function (e) {
    page = 1;
    edate = e.target.value;
    if (sdate == "" || sdate > edate) {
      sdate = edate;
    }
    date = sdate + ", " + edate;
    getTableData(page, trans_type, date, search);
  });
  $("#search-filter").keypress(function (e) {
    if (e.which == 13) {
      e.preventDefault();
      page = 1;
      search = e.target.value;
      getTableData(page, trans_type, date, search);
    }
  });
  $("#clear-filter").click(function () {
    page = 1;
    $("#filter-form")[0].reset();
    getTableData((page = 1), (trans_type = ""), (date = ""), (search = ""));
  });

  // MODAL TOGGLER
  $("#add-trans-btn").click(function () {
    $("#addIncomeModal").modal("toggle");
  });
  $("#add-exp-trans-btn").click(function () {
    $("#addExpenseModal").modal("toggle");
  });

  // transaction create function
  function create_transaction(description, amount, type) {
    $.ajax({
      type: "POST",
      url: "/tasks/new/",
      headers: { "X-CSRFToken": csrftoken },
      data: {
        description: description,
        amount: amount,
        _type: type,
      },
      success: function () {
        console.log("POSTED");
      },
      error: function (err) {
        console.log(err);
      },
    });
  }

  // ADD INCOME
  $("#add-income-submit").click(function (e) {
    e.preventDefault();
    const description = $("#DescriptionText").val();
    const amount = $("#AmountText").val();
    create_transaction(description, amount, "DEBIT");
    $("#addIncomeModal").modal("toggle");
    getTableData(page, trans_type, date, search);
    getBalance();
    $("#income_form").trigger("reset");
  });

  // ADD EXPENSE
  $("#add-expense-submit").click(function (e) {
    e.preventDefault();
    const description = $("#expDescriptionText").val();
    const amount = $("#expAmountText").val();
    create_transaction(description, amount, "CREDIT");
    $("#addExpenseModal").modal("toggle");
    getTableData(page, trans_type, date, search);
    getBalance();
    $("#expense_form").trigger("reset");
  });

  // UPDATE
  var t_id = null;
  var type = null;
  $("#tbody").on("click", ".tran-edit", function (e) {
    e.preventDefault();
    t_id = e.target.dataset.id;
    type = e.target.dataset.type;
    var desc = e.target.dataset.desc;
    var amount = e.target.dataset.amount;
    console.log(t_id, desc, amount, type);
    $("#editTransactionModal").modal("toggle");
    $("#editDescriptionText").val(desc);
    $("#editAmountText").val(amount);
  });

  $("#update-submit").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "PUT",
      url: `/tasks/${t_id}/`,
      headers: { "X-CSRFToken": csrftoken },
      data: {
        description: $("#editDescriptionText").val(),
        amount: $("#editAmountText").val(),
        _type: type,
      },
      success: function () {
        console.log(t_id);
        getTableData(page, trans_type, date, search);
        getBalance();
        $("#editTransactionModal").modal("toggle");
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  // DELETE
  $("#editTransactionModal").on("click", ".tran-delete", function (e) {
    e.preventDefault();
    $.ajax({
      type: "DELETE",
      url: `/tasks/${t_id}`,
      headers: { "X-CSRFToken": csrftoken },
      success: function () {
        console.log("DELETED");
        $("#editTransactionModal").modal("toggle");
        getTableData(page, trans_type, date, search);
        getBalance();
      },
      error: function (err) {
        console.log(err);
      },
    });
  });

  //PAGINATION FUCNTION
  function paginationHtml(pages) {
    var next =
      page == pages
        ? "<li class='page-item disabled'><a class='page-link' href='# id='nextBtn'>Next</a></li>"
        : "<li class='page-item'><a class='page-link' href='#' id='nextBtn'>Next</a></li>";
    var prev =
      page == 1
        ? "<li class='page-item disabled'><a class='page-link' href='#' id='previousBtn' tabindex='-1'>Previous</a></li>"
        : "<li class='page-item'><a class='page-link' href='#' id='previousBtn' tabindex='-1'>Previous</a></li>";
    var temp = `
    <nav aria-label="...">
    <ul class="pagination">
        ${prev}
        ${next}
    </ul>
    </nav>
    `;
    $(".pagination-span").html(temp);
  }
  $(".pagination-span").on("click", "#previousBtn", function (e) {
    e.preventDefault();
    page = page > 1 ? page - 1 : page;
    getTableData(page, trans_type, date, search);
  });
  $(".pagination-span").on("click", "#nextBtn", function (e) {
    e.preventDefault();
    page = page != pages ? page + 1 : page;
    getTableData(page, trans_type, date, search);
  });
});
