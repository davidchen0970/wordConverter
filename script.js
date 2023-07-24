document.getElementById('btnUpperCase').addEventListener('click', convertToUpperCase);
document.getElementById('btnLowerCase').addEventListener('click', convertToLowerCase);
document.getElementById('btnCapitalize').addEventListener('click', capitalizeFirstLetter);
document.getElementById('btnRemoveEnters').addEventListener('click', removeEnters);

function convertToUpperCase() {
  const inputText = document.getElementById('inputText').value;
  const outputText = inputText.toUpperCase();
  document.getElementById('outputText').value = outputText;
}

function convertToLowerCase() {
  const inputText = document.getElementById('inputText').value;
  const outputText = inputText.toLowerCase();
  document.getElementById('outputText').value = outputText;
}

function capitalizeFirstLetter() {
    const inputText = document.getElementById('inputText').value;
    const outputText = inputText.charAt(0).toUpperCase() + inputText.slice(1);
    document.getElementById('outputText').value = outputText;
}

function removeEnters() {
  const inputText = document.getElementById('inputText').value;
  const outputText = inputText.replace(/[\r\n]+/g, ' ');
  document.getElementById('inputText').value = outputText;
}
