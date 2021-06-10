$(function(){
    function updateText(btn, newCount, verb){
      btn.text(newCount + " Likes | " + verb)
    }
    $(".like-btn").click(function(e){
      event.preventDefault()
      var this_ = $(this)
      var likeUrl = this_.attr("data-href")
      var likeCount = parseInt(this_.attr("data-likes")) | 0
         
      $.ajax({
        url: likeUrl,
        method : "GET",
        data:{},
        success: function(data){
          console.log(data)
          if (data.liked){
            var addLike = likeCount + 1
            //add likeCount
            updateText(this_, addLike, "Unlike")
            $(".like-btn").attr("data-likes", addLike);
          }
          else{
            var removeLike = likeCount - 1
            //remove likeCount
            updateText(this_, removeLike, "Like")
            $(".like-btn").attr("data-likes", removeLike);
          }
        },
        error: function(error){
          console.log(error)
        }
      })
    })
    
   
  //comment reply fade toggle
     var fade = (function(event){
       event.preventDefault();
       $(this).parent().next(".comment-reply-section").fadeToggle();
     })
     $("#comment-table").on("click", ".comment-reply-btn", fade);

    
    var loadForm = function () {
      var btn = $(this);
      $.ajax({
        url: btn.attr("data-url"),
        type: 'get',
        dataType: 'json',
        beforeSend: function () {
          $("#modal-comment").modal("show");
        },
        success: function (data) {
          $("#modal-comment .modal-content").html(data.html_form);
        }
      });
    };

    
  var saveForm = function (e) {
    e.preventDefault();
    let form = $(this);
    $.ajax({
      url: form.attr("action"),
      data: form.serialize(),
      type: form.attr("method"),
      dataType: 'json',
      cache: false,
      beforeSend: function () {
        form[0].reset()
      },
      success: function (data) {
        if (data.form_is_valid) {
          $("#comment-table .comment-modified").html(data.html_comment_list);
          $(".js-comment-reply-form").each(function(i){
            $(this).children("#div_id_content").children("div").children("input").val('')
          }
          )
        }
        else {
          $("#modal-comment .modal-content").html(data.html_form);
        }
      }
    });
    return false;
    };

    var saveReplyThreadForm = function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var form = $(this);
      $.ajax({
        url: form.attr("action"),
        data: form.serialize(),
        type: form.attr("method"),
        dataType: 'json',
        cache: false,
        beforeSend: function () {
          form[0].reset()
        },
        success: function (data) {
          if (data.form_is_valid) {
            form.parent().prev().html(data.html_comment_list),
            $(".js-comment-reply-form").children("#div_id_content").children("div").children("input").val('')
          }
          else {
            $("#modal-comment .modal-content").html(data.html_form);
          }
        }
      });
      return false;
      };

    


    $("#modal-comment").on("submit", ".js-comment-create-form", saveForm);
    $("#comment-table").on("submit", ".js-comment-reply-form", saveReplyThreadForm);

    $("#modal-comment-thread-reply").on("submit", ".js-comment-reply-thread-form", saveReplyThreadForm);


    $("#searcher").keyup(function(event) {
      event.preventDefault()
      query = $(this).val();
      var url = `http://127.0.0.1:8000/api/posts/?search=${query}`
      fetch(url)
      .then((resp) => resp.json())
      .then(function(data){
        $(".dropdown-divider").css("display",'');
        $("#searchResults").html('')
        var list = data
        var item = ''
        for(var i in list.results){
          var purl = `/post/${list.results[i].id}`
          var item = item +
          `
            <a class="dropdown-item" href="${purl}">${list.results[i].title}</a>
          `
        }
          $("#searchResults").html(item)
      })
    })

  
});