const resultElement = document.getElementById('result');

function appendToDisplay(value) {
  resultElement.value += value;
}

function calculate() {
  try {
    const result = eval(resultElement.value);
    resultElement.value = result;
  } catch (error) {
    resultElement.value = 'Error';
  }
}

function calculatePercentage() {
  const value = parseFloat(resultElement.value);
  resultElement.value = (value / 100).toString();
}

function clearDisplay() {
  resultElement.value = '';
}
function deletedisplay(){
  resultElement.value = resultElement.value.slice(0, -1);
}