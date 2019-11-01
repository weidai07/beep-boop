$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    var total = ("1", "2", "3");

  function number() {

    if (total === 1) {
      $(".result").text("Beep!");
    }
    if (total === 2) {
      $(".result").text("Boop!");
    }
    if (total === 3) {
      $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
    number();
    $(".result").show();
  });
});
