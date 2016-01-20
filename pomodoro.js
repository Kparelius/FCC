(function() {

  var tone = new Audio("http://kencodes.com/bong.mp3");
  var seconds = 0;
  var rawTime;
  var dropDown = "<input id='chosenTime' size='8' type='number' name='minutes' min='5' step='5' value='25'></input><span>Minutes<span>";

  var reset = function() {
    seconds = 0;
    $(".time").html(dropDown);
  };

  var timeRemaining = function(secs) {
    var remainingMinutes = Math.floor(secs / 60);
    var remainingSeconds = secs % 60;
    if (remainingSeconds > 9) {
     return remainingMinutes + ":" + remainingSeconds;
    } else {
      return remainingMinutes + ":" + "0" + remainingSeconds;
    }
  };

  var countDown = function() {
    rawTime = document.getElementById("chosenTime").value;
    seconds = rawTime * 60;
    var eachSecond = setInterval(function() {
      seconds -= 1;
      $(".time").html(function () {
        return timeRemaining(seconds);
      });
      if (seconds <= 0) {
        clearInterval(eachSecond);
        tone.play();
        $(".time").html(dropDown);
      };
    }, 1000);
  };

  $("#startButton").click(function() {
    countDown();
  });

  $("#resetButton").click(function() {
    reset();
  });

})();