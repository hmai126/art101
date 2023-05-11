// lab.js - This JavaScript file will experiment with
//          DOM manipulation.
// Author: Hilton Mai
// Date: May 10, 2023

function addParagraph() {
    // return an element with id "output"
    var outputEl = document.getElementById("output");

    // create a new <p> element
    var new1El = document.createElement("p");

    // set the text of the new element
    new1El.innerHTML = "Now, you should see this sentence!";

    // insert the element above
    outputEl.appendChild(new1El);
}

function addHeader() {
    // return an element with id "output"
    var outputEl = document.getElementById("output");

    // create a new <h4> element
    var new2El = document.createElement("h4");

    // set the text of the new element
    new2El.innerHTML = "Now, you should see this level 4 header!";

    // insert the element above
    outputEl.appendChild(new2El);
}

function modifySectionColor() {
    // return an element with class "minor-section"
    var outputEl = document.getElementsByClassName("minor-section");

    // loop through all elements with class "minor section" and change the
    // background color property to white
    for (var i = 0; i < outputEl.length; i++) {
        outputEl[i].style.backgroundColor = "white";
    }
}

function modifyFont() {
    // return all elements with a tag
    var outputEl = document.getElementsByTagName("*");

    // loop through all elements with a tag and change the
    // font family property to Comic Sans MS
    for (var i = 0; i < outputEl.length; i++) {
        outputEl[i].style.fontFamily = "Comic Sans MS";
    }
}

