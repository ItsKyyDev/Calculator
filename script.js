let display = document.getElementById("display");
let currentInput = "";
let isResultDisplayed = false; 

function appendNumber(number) {
    if (isResultDisplayed) {
        clearDisplay(); 
    }
    currentInput += number;
    display.value = currentInput;
    isResultDisplayed = false; 
}

function appendOperator(operator) {
    if (isResultDisplayed) {
        isResultDisplayed = false; 
    }
    if (currentInput !== "" && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
    isResultDisplayed = false; 
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
        isResultDisplayed = true; 
    } catch (error) {
        display.value = "Error";
    }
}
