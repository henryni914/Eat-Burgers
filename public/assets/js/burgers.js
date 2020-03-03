$(function () {
  $(".change-eat").on("click", function (event) {
    if ($(this).data("eat") === false) {
      let deleteId = $(this).data("id");
      $.ajax("/api/burgers/" + deleteId, {
        type: "DELETE"
      }).then(
        function () {
          location.reload();
        }
      );
    } else {
      var id = $(this).data("id");
      var newState = $(this).data("eat");
      var newBurgerState = {
        eaten: newState
      };
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function () {
          location.reload();
        }
      );
    }
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    if ($("#ca").val() === "") {
      return;
    } else
      var newBurger = {
        name: $("#ca").val().trim(),
      }
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});
