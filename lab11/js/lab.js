// lab.js - This file is for experimenting with
//          jQuery.
// Author: Hilton Mai
// Date: May 16, 2023

$("#challenge").append("<button id='my-button'>Press me!</button>")
$("#problems").append("<button id='my-button2'>Press me!</button>")
$("#reflection").append("<button id='my-button3'>Press me!</button>")
$("#results").append("<button id='my-button4'>Press me!</button>")

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

