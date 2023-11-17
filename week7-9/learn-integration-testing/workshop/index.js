const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

function calculate(a, sign, b) {
  
  switch (sign) {
    case "+":
      return add(parseFloat(a), parseFloat(b));
    case "-":
      return subtract(parseFloat(a), parseFloat(b));
    case "*":
      return multiply(parseFloat(a), parseFloat(b));
    case "/":
      return divide(parseFloat(a), parseFloat(b));
    default:
      return "Please enter a valid sign (+, -, *, /)";
  }
}

const form = document.querySelector("form");
const result = document.querySelector("#result");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // get user input from form
  const data = new FormData(form);
  const a = data.get("a");
  const sign = data.get("sign");
  const b = data.get("b");

  // calculate result and update page
  const answer = calculate(a, sign, b);
  document.querySelector("#result").textContent = answer;
  event.target.reset();
});
