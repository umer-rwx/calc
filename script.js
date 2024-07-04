// I'm sorry for creating these abominations
"use strict";

const displayTopNum = document.getElementById("number");
const displayTopOp = document.getElementById("operator");

const displayBottom = document.getElementById("display-bottom");

const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");

const backspaceButton = document.getElementById("c");
const clearButton = document.getElementById("ac");

for (let x = 0; x < numberButtons.length; x++) {
    numberButtons[x].addEventListener("click", function() {
        if (displayBottom.textContent.length >= 20) return;
        if (displayBottom.textContent.includes(".") && numberButtons[x].textContent === ".") return;

        displayBottom.textContent = displayBottom.textContent + numberButtons[x].textContent;
    })
}

for (let x = 0; x < operatorButtons.length; x++) {
    operatorButtons[x].addEventListener("click", function() {
        if (operatorButtons[x].textContent === "=") {
            operate();

            if (displayTopNum.textContent != false) displayBottom.textContent = displayTopNum.textContent;

            displayTopOp.textContent = null;
            displayTopNum.textContent = null;
            return;
        }


        if (displayTopOp.textContent != false) {
            operate();
        } else {
            displayTopNum.textContent = displayBottom.textContent;
            displayBottom.textContent = "";
        }

        displayTopOp.textContent = operatorButtons[x].textContent;
    });
}

function operate() {
    let result;
    switch (displayTopOp.textContent) {
        case "+":
            result = Number(displayTopNum.textContent) + Number(displayBottom.textContent);
            displayTopNum.textContent = String(result);
            break;
        case "-":
            result = Number(displayTopNum.textContent) - Number(displayBottom.textContent);
            displayTopNum.textContent = String(result);
            break;
        case "*":
            result = Number(displayTopNum.textContent) * Number(displayBottom.textContent);
            displayTopNum.textContent = String(result);
            break;
        case "/":
            result = Number(displayTopNum.textContent) / Number(displayBottom.textContent);
            displayTopNum.textContent = String(result);
            break;
        case "=":
            displayBottom.textContent = displayTopNum.textContent;
            return; // To skip the line which clears the bottom text
    }
    displayBottom.textContent = "";
}


clearButton.addEventListener("click", function() {
    displayTopNum.textContent = displayTopOp.textContent = displayBottom.textContent = null;
});

backspaceButton.addEventListener("click", function(){
    if (displayBottom.textContent == false) {
        displayTopOp.textContent = null;
    } else {
        const arr = displayBottom.textContent.split("");
        arr.pop();
        displayBottom.textContent = arr.join("");
    }
})