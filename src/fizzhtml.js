/* global document */
// get value from input when user enters a number and presses submit
document.getElementById('submit').onclick = fizzbuzz;

function fizzbuzz() {
  // get what the number means from the input
  const number = parseFloat(document.getElementById('enter').value);

  if (number % 3 === 0 && number % 5 === 0) {
    document.getElementById('result').innerHTML = 'Fizzbuzz! Number is dividable by 3 and 5';
    document.getElementById('enter').value = '';
  } else if (number % 3 === 0) {
    document.getElementById('result').innerHTML = 'Fizz...Number is dividable by 3';
    document.getElementById('enter').value = '';
  } else if (number % 5 === 0) {
    document.getElementById('result').innerHTML = 'Buzz...Number is dividable by 5';
    document.getElementById('enter').value = '';
  } else {
    document.getElementById('result').innerHTML = 'Number is not dividable by 3 or 5';
    document.getElementById('enter').value = '';
  }
}
