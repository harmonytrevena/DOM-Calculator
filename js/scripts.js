'use strict';

// const calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };
  
//   function inputDigit(digit) {
//     const { displayValue } = calculator;
//     // Overwrite 'displayValue' if the current value is '0' otherwise append to it
//     calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
//   }
  
//   function updateDisplay() {
//     const display = document.querySelector('.input');
//     display.value = calculator.displayValue;
//   }
  
//   updateDisplay();
  
//   const keys = document.querySelector('.calculator-keys');
//   keys.addEventListener('click', function (event) {
//     const { target } = event;
//     if (!target.matches('button')) {
//       return;
//     }

//     if (target.classList.contains('operator')) {
//       console.log('operator', target.value);
//       return;
//     }
  
//     if (target.classList.contains('decimal')) {
//       console.log('decimal', target.value);
//       return;
//     }
  
//     if (target.classList.contains('clear')) {
//       console.log('clear', target.value);
//       return;
//     }
  
//     inputDigit(target.value);
//     updateDisplay();
//   });

const input = document.getElementById('input'),
    numbers = document.querySelectorAll('.numbers'), // number button 
    operators = document.querySelectorAll('.operator'), // operator buttons
    result = document.querySelector('.equal'), // equal button
    reset = document.querySelector('.clear'); // clear button

let resultDisplayed = false; // flag to keep and eye on what output is displayed

let numberOperatorsArray = [];

numbers.forEach(function (number){
    number.addEventListener('click', function (){
        input.innerHTML += this.value;
        numberOperatorsArray = [...numberOperatorsArray, this.value];
        console.log(numberOperatorsArray);
    });
});

operators.forEach(function (operator){
    operator.addEventListener('click', function (){
        input.innerHTML += this.value;
        numberOperatorsArray = [...numberOperatorsArray, this.value];
        console.log(numberOperatorsArray);
    });
});

result.addEventListener('click', function (){
        // this will do math
    });

reset.addEventListener('click', function (){
        input.innerHTML = "";
    });