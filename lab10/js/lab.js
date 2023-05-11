// lab.js - This file is for experimenting with
//          JavaScripts events and forms.
// Author: Hilton Mai
// Date: May 11, 2023

// function that sorts a string
function sortName(str) {
    return str.split('').sort().join('');
} 

// find element for the button
var buttonEl = document.getElementById("my-button");

// function for returning a sorted version of the inputted name
buttonEl.addEventListener("click", function() {
    // find input element
    var inputEl = document.getElementById("user-name");

    // set the variable inputValue to the inputted name
    var inputValue = inputEl.value;
    console.log("Your input:", inputValue);

    // call sortName() to sort the inputted name and save it to nameStr
    var nameStr = sortName(inputValue);

    // find the element with id "output"
    var outputEl = document.getElementById("output");

    // replace the HTML in <div id="output" with the results
    outputEl.innerHTML = "Your name sorted is: " + nameStr;

    // clear the text box and set the cursor after the button is pressed 
    inputEl.value = "";
    inputEl.focus();
});