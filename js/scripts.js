$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    // var none = 0;
    // var one = 1;
    // var two = 2;
    // var three = 3;
    var total = ("1", "2", "3");
    var result = "";
    //
    if (total === "1") {
      $(".result").append("Beep!");
      // alert ("Beep!");
    // } else if (total === 2) {
    //   $(".result").text("Boop!");
    // } else if (total === 3) {
    //   $(".result").text("I'm sorry, Dave. I'm afraid I can't do that.");
    }
    return result; 
    $(".result").show();
  });
});

   //
   // var tempInput = input;
   // if(input < 4000){
   //  for(i = 0; i < int.length; i++) {
   //   while(tempInput >= baseTen[v]) {
   //     result += romanNumerals[v];
   //     tempInput -= baseTen[v];
