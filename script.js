let display = document.getElementById("display");
let currentInput = "";
let isResultDisplayed = false; // Menandakan apakah hasil sudah ditampilkan

function appendNumber(number) {
    if (isResultDisplayed) {
        clearDisplay(); // Bersihkan layar jika hasil sudah ditampilkan
    }
    currentInput += number;
    display.value = currentInput;
    isResultDisplayed = false; // Reset flag karena sekarang input baru dimulai
}

function appendOperator(operator) {
    if (isResultDisplayed) {
        isResultDisplayed = false; // Jika operator ditekan setelah hasil, biarkan tetap tampil
    }
    if (currentInput !== "" && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = "";
    display.value = "";
    isResultDisplayed = false; // Reset flag
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
        isResultDisplayed = true; // Hasil sudah ditampilkan
    } catch (error) {
        display.value = "Error";
    }
}
