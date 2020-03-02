$(function() {
    $(".change-eat").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("eat");
      var newBurgerState = {
        eaten: newState
      };
  
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          location.reload();
        }
      );
    });

$(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#ca").val().trim(),
    }
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});