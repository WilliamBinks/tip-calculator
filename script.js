let userInputBox = document.getElementById("bill-amount");
let userInput;
let tenPercentButton = document.getElementById("ten");
let fifteenPercentButton = document.getElementById("fifteen");
let twentyPercentButton = document.getElementById("twenty");
let tipSelected;
let tipAmount;
let total;
let calculateButton = document.getElementById("calculate");
let outputBox = document.getElementById("final-cost");

tenPercentButton.addEventListener("click",() => buttonPressed(10));
fifteenPercentButton.addEventListener("click",() => buttonPressed(15));
twentyPercentButton.addEventListener("click",() => buttonPressed(20));

calculateButton.addEventListener("click",() => calculate(tipSelected))

function buttonPressed(button){
    tipSelected = button;
}

function calculate(percentageChoice){
    userInput = userInputBox.value;
    percentageChoice = percentageChoice/100;
    tipAmount = userInput * percentageChoice;
    console.log(tipAmount);
    total = Number(userInput) + Number(tipAmount);
    console.log(total);
    outputBox.textContent = "$"+String(total);
}
