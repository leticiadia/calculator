const toggle = document.getElementById("mode-toggle");
const backgroundImage = document.getElementById("background-image");
const modeIcon = document.getElementById("mode-icon");
const modeText = document.getElementById("mode-text");

const icons = {
  light: "./assets/icons/SunDim.svg",
  dark: "./assets/icons/Moon.svg",
};

const images = {
  light: "./assets/images/header.png",
  dark: "./assets/images/header-dark-mode.png",
};

function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");

  modeIcon.src = isDark ? icons.dark : icons.light;
  backgroundImage.src = isDark ? images.dark : images.light;

  modeText.textContent = isDark ? "dark mode" : "light mode";
}

toggle.addEventListener("click", toggleDarkMode);

const operationDisplay = document.querySelector(
  ".operation-result p:first-child"
);
const resultDisplay = document.querySelector(".operation-result p:last-child");
const buttons = document.querySelectorAll(".calculator-keyboard button");

let currentOperation = "";

function calculator(buttonValue) {
  if (buttonValue === "Clear") {
    currentOperation = "";
    operationDisplay.textContent = "";
    resultDisplay.textContent = "";
    return;
  }

  if (buttonValue === "=") {
    try {
      const result = eval(currentOperation);
      resultDisplay.textContent = result;
    } catch (error) {
      resultDisplay.textContent = "Error";
    }

    return;
  }

  if (buttonValue === ".") {
    const lastNumber = currentOperation.split(/[\+\-\*\/]/).pop();
    if (lastNumber.includes(".")) {
      return;
    }
  }

  currentOperation += buttonValue;
  operationDisplay.textContent = currentOperation;
}

buttons.forEach((button) => {
  button.addEventListener("click", () => calculator(button.textContent));
});
