let userInputBox = document.getElementById("bill-amount");
let userInput;
let tenPercent = document.getElementById("ten");
let fifteenPercent = document.getElementById("fifteen");
let twentyPercent = document.getElementById("twenty");
let tipSelected;

function buttonPressed(button){
    console.log(button);
}

tenPercent.addEventListener("click",buttonPressed(tenPercent));


