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

// Appending buttons for bonus task
$("#output").append("<button id='red-button' class='red'>Red Button!</button>")
$("#output").append("<button id='green-button' class='green'>Green Button!</button>")

// Clicking on the red button will turn the green button red
$("#red-button").click(function() {
    // Check if the green button is already green
    if (($("#green-button").hasClass("green")) == true) {
        // If so, turn it off
        $("#green-button").toggleClass("green");
        // Check if the red button is not red
        if (($("#red-button").hasClass("red")) == false) {
            // Check if the red button has the "green" class toggled on
            if (($("#red-button").hasClass("green")) == true) {
                // If so, turn it off
                $("#red-button").toggleClass("green");
            }
            $("#red-button").toggleClass("red");
        }
        // Change the green button's color to red
        $("#green-button").toggleClass("red");
    }
});

// Clicking on the green button will turn the red button green
$("#green-button").click(function() {
    // Check if the red button is already red
    if (($("#red-button").hasClass("red")) == true) {
        // If so, turn it off
        $("#red-button").toggleClass("red");
         // Check if the green button is not green
            if (($("#green-button").hasClass("green")) == false) {
                // Check if the green button has the "red" class toggled on
                if (($("#green-button").hasClass("red")) == true) {
                    // If so, turn it off
                    $("#green-button").toggleClass("red");
                }
                $("#green-button").toggleClass("green");
            }
        // Change the red button's color to green
        $("#red-button").toggleClass("green");
    }
});