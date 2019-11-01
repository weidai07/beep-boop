$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    if (total === 1) {
      $(".result").text("Beep!")
    } else if (total === 2) {
      $(".result").text("Boop!")
    } else if (total === 3) {
      $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.")
    }

    $(".result").show();
  });
