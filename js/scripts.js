    var results = [];

    function beep(num) {
    for (var i = 0; i <= num; i++) {
      results[i]=i.toString();
     if (results[i].includes(3)) {
       results[i]="I'm sorry, Dave. I'm afraid I can't do that.";
     } else if (results[i].includes(2)) {
       results[i]="Boop!";
     } else if (results[i].includes(1)) {
       results[i]="Beep!";
     } else {
       results.push(i);
     }
      return results;
     };
    };


$(document).ready(function() {
$("form#digit").submit(function(event) {
  event.preventDefault();

  var userInput = parseInt($("#userInput1").val());
  beep(userInput);
  $("#box").append();

  });
});
