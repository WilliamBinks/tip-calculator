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
let billAmountError = document.getElementById("bill-amount-error");
let tipError = document.getElementById("tip-error");


tenPercentButton.addEventListener("click",() => buttonPressed(10));
fifteenPercentButton.addEventListener("click",() => buttonPressed(15));
twentyPercentButton.addEventListener("click",() => buttonPressed(20));

calculateButton.addEventListener("click",() => calculate(tipSelected))

function buttonPressed(button){
    tipSelected = button;
    tipError.textContent = ""
}

function calculate(percentageChoice){
    userInput = userInputBox.value;
    if (userInput && percentageChoice){
        percentageChoice = percentageChoice/100;
        tipAmount = userInput * percentageChoice;
        total = Number(userInput) + Number(tipAmount);
        outputBox.textContent = "$"+String(total);
        billAmountError.textContent= ""
        tipError.textContent = ""
    } else{
        console.log(percentageChoice);
        console.log(typeof userInput);
        if (userInput === "" && percentageChoice !== undefined){
            billAmountError.textContent = "Please enter the bill amount";
        }else if(userInput !== "" && percentageChoice === undefined){
            tipError.textContent = "Please select the tip";
        }else{
            billAmountError.textContent = "Please enter the bill amount";
            tipError.textContent = "Please select the tip";
        }   
    }
    
}
