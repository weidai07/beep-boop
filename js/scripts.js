    var results = [];

    function beep (num) {
    for (var i = 0; i <= num; i++) {
      i = i.toString();
     if (i.includes(3)) {
       results.push("I'm sorry, Dave. I'm afraid I can't do that.");
     } else if (i.includes(2)) {
       results.push("Boop!");
     } else if (i.includes(1)) {
       results.push("Beep!");
     } else {
       results.push(i);
     }};
       return results.join(" ");
    };


$(document).ready(function() {
$("form#digit").submit(function(event) {
  event.preventDefault();

  var userInput = parseInt($("#userInput1").val());
  $("#box").append(beep(userInput));

  });
});
