$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    var results = [];

    function beep() {
     for (var i = 0; i <= results.length; i++) {
       if ((i = 3) === true) {
         return $("#result").text("I'm sorry, Dave. I'm afraid I can't do that.");
       } else if ((i = 2) === true) {
         return $("#result").text("Boop!");
       } else if ((i = 1) === true) {
         return $("#result").text("Beep!");
       } else {
         return $("#result").text("");
     }
   }}

      $("#result").text(results);

  });
});
