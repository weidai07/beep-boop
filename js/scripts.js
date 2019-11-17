$(document).ready(function() {
  $("form#digit").submit(function(event) {
    event.preventDefault();

    var integer = function (userInput1) {
    var results = [];
    results[i] = i + " ";
    var list = results[i].toString();

    function beep(num) {
      for (var i = 0; i <= num; i++) {

       if (list.includes(3)) {
         results[i] = "I'm sorry, Dave. I'm afraid I can't do that.";
       } else if (list.includes(2)) {
         results[i] = "Boop!";
       } else if (list.includes(1)) {
         results[i] = "Beep!";
       } else {
         return results;
       };
     }};
     $("#box").show(results);
   };

  });
});
