//Basic math operators

let add = (x,y) => x+y;
let subtract = (x,y) => x-y;
let multiply = (x,y) => x*y;
let divide = (x,y) => x/y;

// Creating three variables for each of the parts of a calculator operation

let firstNumber;
let operator;
let secondNumber;


// Creating a function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = ((operation, firstOperand, secondOperand) =>{
    switch (operation){
        case "+":
            return add(firstOperand, secondOperand);
            break;
        case "-":
            return subtract(firstOperand, secondOperand);
            break;
        case "*":
            return multiply(firstOperand, secondOperand);
            break;
        case "/":
            return divide(firstOperand, secondOperand);
            break;  
    }
});

// clearing the calculator display
const clear = document.getElementById("clear");
var display = document.getElementById("display");
clear.addEventListener("click", ()=> {
    display.value=""
    firstNumber = '';
    secondNumber = '';
    operator = "";
});

// Creating the function that populates the display when you click the number buttons.
function addToDisplay(character){
    display.value= display.value + character;
}

function addOperator (character){
    operator = character;
}


//working the calculator
 const equals = document.getElementById("equals");
 equals.addEventListener("click", () => {
    let displayValue = display.value;
    let parts = displayValue.split(operator);
    firstNumber = Number(parts[0]);
    secondNumber = Number(parts[1]);
    display.value = operate(operator, firstNumber, secondNumber)
 });
