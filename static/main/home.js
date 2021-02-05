$(function () {
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
  function getTableData() {
    $.ajax({
      url: "/mybalance/",
      success: function (result) {
        console.log(result);
        $("#balance_amt").html(result.balance);
      },
      error: function (err) {
        console.log(err);
      },
    });
    $.ajax({
      url: "/my-tasks/",
      success: function (result) {
        var tdata = "";
        $.each(result, function (index, tran) {
          var style = tran._type == "DEBIT" ? "table-success" : "table-danger";
          tdata += `<tr class="${style}" id='${tran.id}'>
                  <th scope="row">${tran.date}</th>
                  <td>${tran.description}</td>
                  <td>${tran.amount}</td>
                  <td>
                      <div class="btn-group btn-group-small">
                          <button class='btn btn-small btn-warning tran-edit' data-id='${tran.id}' data-desc='${tran.description}' data-amount='${tran.amount}' data-type='${tran._type}'>&#9998;</button>
                          
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
    getTableData();
    $("#income_form").trigger("reset");
  });

  // ADD EXPENSE
  $("#add-expense-submit").click(function (e) {
    e.preventDefault();
    const description = $("#expDescriptionText").val();
    const amount = $("#expAmountText").val();
    create_transaction(description, amount, "CREDIT");
    $("#addExpenseModal").modal("toggle");
    getTableData();
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
        getTableData();
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
        getTableData();
      },
      error: function (err) {
        console.log(err);
      },
    });
  });
});
