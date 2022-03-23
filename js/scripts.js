function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    
    const num1 = parseInt($("#first-num").val());
    const num2 = parseInt($("#second-num").val());

    const operation = $("input:radio[name=operation]:checked").val();

    let answer;
    if (operation === "add") {
      answer = add(num1, num2);
    } else if (operation === "subtract") {
      answer = subtract(num1, num2);
    } else if (operation === "multiply") {
      answer = multiply(num1, num2);
    } else {
      answer = divide(num1, num2);
    }

    $("#answer").text(answer);
  });
});