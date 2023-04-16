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
