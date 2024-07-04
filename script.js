// I'm sorry for creating these abominations
"use strict";

const displayTop = document.getElementById("display-top");
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

