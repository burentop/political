$(document).ready(function () {
  $(".profile form").submit(function (event) {
    event.preventDefault();
    var name = $("#name").val();
    var gender = parseInt($("#gender").val());
    var age = parseInt($("#age").val());
    var justice = parseInt($("#justice").val());
    
    if ((!name)) {
      $(".input-name").addClass("has-error");
      $("#name-warning").text("Please enter your name.");
    } else {
      if (age < 18) {
        $("#political-name").text("Homework");
        $("#political-reason").text("You should really just be focused on school right now!");
      } else if (color === 3) {
        $("#political-name").text("Pee Wee Herman");
        $("#political-reason").text("Pink Camo is a very weird color - so Pee Wee seems like a valid choice.")
      } else if (gender === 0) {
        $("#political-name").text("Jennifer Aniston");
        $("#political-reason").text("All guys like Jennifer, right?");
      } else {
        $("#political-name").text("Chris Pratt");
        $("#political-reason").text("I hear Chris is all the rage these days.")
      }

      $(".results").show();
    }
    
  });
});