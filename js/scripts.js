'use strict';

const input = document.getElementById('input'),
    numbers = document.querySelectorAll('.numbers'), // number button 
    operators = document.querySelectorAll('.operator'), // operator buttons
    result = document.querySelector('.equal'), // equal button
    reset = document.querySelector('.clear'), // clear button
    decimals = document.querySelectorAll('.decimal');

let resultDisplayed = false; // flag to keep an eye on what output is displayed

let numberOperatorsArray = [];

numbers.forEach(function (number){
    number.addEventListener('click', function (){
        input.innerHTML += this.value;
        numberOperatorsArray = [...numberOperatorsArray, this.value];
    });
});

operators.forEach(function (operator){
    operator.addEventListener('click', function (){
        input.innerHTML += this.value;
        numberOperatorsArray = [...numberOperatorsArray, this.value];
    });
});

decimals.forEach(function (decimal){
    decimal.addEventListener('click', function (){
        input.innerHTML += this.value;
        numberOperatorsArray = [...numberOperatorsArray, this.value];
    });
});

result.addEventListener('click', function (){
        // this will do math
        let numbersString = "";
        let resultArray = [];
        for (let char of numberOperatorsArray) {
            let numReg = /\d/; // this is a regex (regular expressions)
            if (numReg.test(char) || char === '.') {
                numbersString += char;
            } else {
                resultArray = [...resultArray, Number(numbersString), char];
                // reset here to stop concatenating
                numbersString = "";
            }
        }
        resultArray = [...resultArray, Number(numbersString)];
        
        // used for multiplication
        let multiply = resultArray.indexOf("*");
        while (multiply !== -1) {
            resultArray.splice(multiply-1, 3, resultArray[multiply - 1] * resultArray[multiply + 1]);
            multiply = resultArray.indexOf("*");
        }

        // used for division
        let divide = resultArray.indexOf("/");
        while (divide !== -1) {
            resultArray.splice(divide-1, 3, resultArray[divide - 1] / resultArray[divide + 1]);
            divide = resultArray.indexOf("/");
        }

        // used for addition
        let add = resultArray.indexOf("+");
        while (add !== -1) {
            resultArray.splice(add-1, 3, resultArray[add - 1] + resultArray[add + 1]);
            add = resultArray.indexOf("+");
        }
        
        // used for subtraction
        let subtract = resultArray.indexOf("-");
        while (subtract !== -1) {
            resultArray.splice(subtract-1, 3, resultArray[subtract - 1] - resultArray[subtract + 1]);
            subtract = resultArray.indexOf("-");
        }
        // result
        numberOperatorsArray = [...resultArray];
        input.innerHTML = numberOperatorsArray[0];
    });

    // clearing the input on the press of C
    reset.addEventListener('click', function (){
        numberOperatorsArray = [];
        input.innerHTML = "";
    });