/**
 * This javascript script is used by the HTML document to do various operations defined in the calculator.
 * There are three functions defined:
 *
 * 1) clearScreen() = Clears the calculator screen.
 * 2) display(numberOrOperator) = Any number or opearator clicked will be appended to the display.
 * 3) calculate() = This method will evaluate the expression on the display screen using the eval() of javascript.
 */

//clearScreen method
function clearScreen() {
  document.getElementById("display-box").value = "";
}

//display method
function display(numberOrOperator) {
  document.getElementById("display-box").value += numberOrOperator;
}

//calculate method
function calculate() {
  var valueDisplayed = document.getElementById("display-box").value;
  var expressionEvaluate = eval(valueDisplayed);

  document.getElementById("display-box").value = expressionEvaluate;
}

function calculatePercentage() {
  var valueDisplayed = document.getElementById("display-box").value;
  var expressionEvaluate = eval(valueDisplayed);
  expressionEvaluate /= 100;

  document.getElementById("display-box").value = expressionEvaluate;
}
