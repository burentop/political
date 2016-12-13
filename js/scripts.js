$(document).ready(function () {
  $(".profile form").submit(function (event) {
    event.preventDefault();
    var gender = parseInt($("#gender").val());
    var age = parseInt($("#age").val());
    var color = parseInt($("#color").val());
    
    if (age < 18) {
      $("#celeb-name").text("Homework");
      $("#celeb-reason").text("You should really just be focused on school right now!");
    } else if (color === 3) {
      $("#celeb-name").text("Pee Wee Herman");
      $("#celeb-reason").text("Pink Camo is a very weird color - so Pee Wee seems like a valid choice.")
    } else if (gender === 0) {
      $("#celeb-name").text("Jennifer Aniston");
      $("#celeb-reason").text("All guys like Jennifer, right?");
    } else {
      $("#celeb-name").text("Chris Pratt");
      $("#celeb-reason").text("I hear Chris is all the rage these days.")
    }

    $(".results").show();
  });
});