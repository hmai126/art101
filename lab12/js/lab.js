// lab.js - This JavaScript file contains a sorting
//          function that depends on conditionals.
// Author: Hilton Mai
// Date: May 19, 2023

function sortingHat(str) {
    var length = str.length;
    var mod = length % 4;
    console.log(mod);
    var house;
    if (mod == 0) {
        house = "Gryffindor";
    }
    else if (mod == 1) {
        house = "Ravenclaw";
    }
    else if (mod == 2) {
        house = "Slytherin";
    }
    else if (mod == 3) {
        house = "Hufflepuff";
    }
    return house;
}

$("#button").click(function() {
    var name = $("#input").val();
    var house = sortingHat(name);
    $("#output").append("The Sorting Hat has sorted you into " + house + ".<br>");
    // clear the text box and set the cursor after the button is pressed 
    $("#input").val('').focus();

})
