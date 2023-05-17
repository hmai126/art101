// lab.js - This file is for experimenting with
//          jQuery.
// Author: Hilton Mai
// Date: May 16, 2023


// Find the section you want to add the button to
// Create the button
// Give it a text label
// Add it to the section
$("#challenge").append("<button id='my-button'>Press me!</button>")
$("#problems").append("<button id='my-button2'>Press me!</button>")
$("#reflection").append("<button id='my-button3'>Press me!</button>")
$("#results").append("<button id='my-button4'>Press me!</button>")

// Add a click event to each button
// Find the challenge, problems, reflections, or results section the button is in.
// Toggle a class special within the <div> of the section
$("#my-button").click(function() {
    $("#challenge").toggleClass("special");
});

$("#my-button2").click(function() {
    $("#problems").toggleClass("special");
});

$("#my-button3").click(function() {
    $("#reflection").toggleClass("special");
});

$("#my-button4").click(function() {
    $("#results").toggleClass("special");
});

