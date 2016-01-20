(function() {

  var currentDisplay = 0;
  var calcArray = [];
  var numberArray = [];

  var calculate = function() {
    pushNumber();
    display(eval(calcArray.join("")));
  };

  var display = function(item) {
    currentDisplay = item;
    $("#display").html(currentDisplay);
    console.log(currentDisplay);
    console.log(numberArray);
    console.log(calcArray);
  };

  var pushNumber = function() {
    calcArray.push(parseFloat(numberArray.join("")));
    numberArray = [];
  };

  var pushDigit = function(digit) {
    numberArray.push(digit);
    display(numberArray);
  };

  var pushNumberAndOperator = function(operator) {
    pushNumber();
    if (isNaN(calcArray[calcArray.length - 1])) {
      return;
    } else {
      calcArray.push(operator);
    };
  };

  $(document).ready(function(){


  $("#allclear").click(function() {
    numberArray = [];
    calcArray = [];
    display(0);
  });

  $("#seven").click(function() {
    pushDigit(7);
  });

  $("#four").click(function() {
    pushDigit(4);
  });

  $("#one").click(function() {
    pushDigit(1);
  });

  $("#zero").click(function() {
    pushDigit(0);
  });

  $("#clear").click(function() {
    numberArray = [];
    display(0);
  });

  $("#eight").click(function() {
    pushDigit(8);
  });

  $("#five").click(function() {
    pushDigit(5);
  });

  $("#two").click(function() {
    pushDigit(2);
  });

  $("#decimal").click(function() {
    pushDigit(".");
  });

  $("#percent").click(function() {});

  $("#nine").click(function() {
    pushDigit(9);
  });

  $("#six").click(function() {
    pushDigit(6);
  });

  $("#three").click(function() {
    pushDigit(3);
  });

  $("#equals").click(function() {
    calculate();
  });

  $("#divide").click(function() {
    pushNumberAndOperator("/");
  });

  $("#multiply").click(function() {
    pushNumberAndOperator("*");
  });

  $("#subtract").click(function() {
    pushNumberAndOperator("-");
  });

  $("#add").click(function() {
    pushNumberAndOperator("+");
  });

});

})();