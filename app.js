const otpNumbers = document.querySelectorAll(".otp-number");
let currentInput;
let result = [];

function handleFocus(e) {
  currentInput = +e.target.dataset.order;
}

function focusByOrder(order) {
  if (order < otpNumbers.length - 1 || order > 0) {
    const target = otpNumbers[order] || {};
    target.focus();
    target.select();
  }
}

function handleChange(e) {
  const value = e.target.value[0];
  if (value) {
    e.target.value = value || "";
    result[currentInput] = +value;
    focusByOrder(currentInput + 1);
  }
}

function handleKeyUP(e) {
  switch (e.key) {
    case "Backspace": {
      if (result[currentInput]) result[currentInput] = null;
      else focusByOrder(currentInput - 1);
      break;
    }
    case "ArrowRight":
      focusByOrder(currentInput + 1);
      break;
    case "ArrowLeft":
      focusByOrder(currentInput - 1);
      break;
    default:
      break;
  }
}

otpNumbers.forEach((input) => {
  input.addEventListener("focus", handleFocus);
  input.addEventListener("input", handleChange);
  input.addEventListener("keyup", handleKeyUP);
});

window.addEventListener("load", () => otpNumbers[0].focus());
