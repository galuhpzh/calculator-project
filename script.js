// CALCULATOR
const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value); // be careful with eval, it can execute arbitrary code
  } catch (error) {
    display.value = "Error";
  }
}
