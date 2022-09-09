function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a, b) {
    return a / b; //TODO: zero division -> undefined
}

function parseInput(str) {
  let arr = str.split(' ');
  return arr;
}

function operate(arr) {
  let result = Number(arr[0]);
  let i = 1;
  for (; i <= arr.length; i = i + 2) {

    switch (arr[i]) {
      case '+':
        console.log(`+ operation on: ${result} and ${arr[i+1]}`);
        result = add(result, Number(arr[i+1]));
        break;
      case '-':
        console.log(`- operation on: ${result} and ${arr[i+1]}`);
        result = subtract(result, Number(arr[i+1]));
        break;
      case '*':
        console.log(`* operation on: ${result} and ${arr[i+1]}`);
        result = multiply(result, Number(arr[i+1]));
        break;
      case '÷':
        console.log(`/ operation on: ${result} and ${arr[i+1]}`);
        if (Number(arr[i+1]) === 0 ) return "Division by zero!";
        result = divide(result, Number(arr[i+1]));
        break;
      default:
        // code
    }
  }

  return result;

}

function clear() {
    input.value = "";
}

function calculate() {
    let arr = parseInput(input.value);
    input.value = operate(arr);
}

function addDigit(e) {
    input.value = input.value + this.textContent;
}

function addOp(e) {
    input.value = input.value + ' ' + this.textContent + ' ';
}

const input = document.querySelector("#display");
let displayHidden = "";

// clear button
const clearButton = document.querySelector("#clear-button");
clearButton.addEventListener('click', clear);

// equals button
const equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener('click', calculate);

// digit buttons
const digitButtons = document.querySelectorAll(".digit-button");
digitButtons.forEach(button => button.addEventListener('click', addDigit));

// op buttons
const opButtons = document.querySelectorAll(".op-button");
opButtons.forEach(button => button.addEventListener('click', addOp));