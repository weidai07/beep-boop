$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    var total = ("1", "2", "3");
    var result = "";


  function number {

    if (total === 1) {
      $(".result").alert("Beep!");
    } else if (total === 2) {
      $(".result").text("Boop!");
    } else if (total === 3) {
      $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
    }
  }
    number();
    $(".result").show();
  });
});


   //  for(i = 0; i < x.length; i++) {
   //   while(x >= y]) {
