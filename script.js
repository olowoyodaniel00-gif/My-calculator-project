const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      currentInput = "";
      display.value = "";
      return;
    }

    if (value === "=") {
      try {
        currentInput = currentInput
          .replace("×", "*")
          .replace("÷", "/")
          .replace("−", "-");

        display.value = eval(currentInput);
        currentInput = display.value;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
      return;
    }

    currentInput += value;
    display.value = currentInput;
  });
});

/* Bonus: Keyboard support */
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    currentInput += e.key;
    display.value = currentInput;
  }

  if (e.key === "Enter") {
    try {
      display.value = eval(currentInput);
      currentInput = display.value;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  }

  if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  }

  if (e.key.toLowerCase() === "c") {
    currentInput = "";
    display.value = "";
  }
});
