function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const pin = getPin();
  const generateField = document.getElementById("generate-input");
  generateField.value = pin;
});

document.getElementById("calculator").addEventListener("click", function (e) {
  const calculatorField = document.getElementById("calculator-input");
  const number = e.target.innerText;
  const calculatorText = calculatorField.value;
  if (isNaN(number)) {
    if (number === "C") {
      calculatorField.value = "";
    }
  } else {
    const newText = calculatorText + number;
    calculatorField.value = newText;
    console.log(e.target.innerText);
  }
});

document.getElementById("submit").addEventListener("click", function () {
  const calculatorField = document.getElementById("calculator-input");
  const calculatorText = calculatorField.value;

  const generateField = document.getElementById("generate-input");
  const generateFieldValue = generateField.value;

  if (generateFieldValue === calculatorText) {
    alert("pin matched");
  } else {
    alert("pin did not matched");
  }
});
