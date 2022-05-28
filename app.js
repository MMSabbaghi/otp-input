const otpNumbers = document.querySelectorAll(".otp-number");
let currentInput;
let result = [];

function handleFocus(e) {
  const { order } = e.target.dataset;
  currentInput = +order;
}

function focusByOrder(order) {
  if (order < otpNumbers.length - 1 || order > 0) {
    document.querySelector(`.otp-number[data-order="${order}"]`)?.focus();
  }
}

function handleChange(e) {
  const { value } = e.target;
  if (value) {
    e.target.value = value[0] || "";
    result[currentInput] = +value[0];
    focusByOrder(currentInput + 1);
  }
}

function handleKeyUP(e) {
  const key = e.key;
  if (key === "Backspace") {
    if (result[currentInput]) result[currentInput] = null;
    else focusByOrder(currentInput - 1);
  } else if (key === "ArrowRight") focusByOrder(currentInput + 1);
  else if (key === "ArrowLeft") focusByOrder(currentInput - 1);
}

otpNumbers.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("input", handleChange);
  input.addEventListener("keyup", handleKeyUP);
});

window.addEventListener("load", () => otpNumbers[0].focus());
