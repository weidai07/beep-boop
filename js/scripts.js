$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    var int = 0;
    var result = "";

    if (total === 1) {
      $(".result").text("Beep!");
    } else if (total === 2) {
      $(".result").text("Boop!");
    } else if (total === 3) {
      $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
    }

  });
    $(".result").show();

   // var tempInput = input;
   // if(input < 4000){
   //  for(i = 0; i < int.length; i++) {
   //   while(tempInput >= baseTen[v]) {
   //     result += romanNumerals[v];
   //     tempInput -= baseTen[v];
