// lab.js - This JavaScript file will take user input and manipulate a string.
// Author: Hilton Mai
// Date: May 2, 2023

// Functions
function sortName() {
    var userName = window.prompt("Hi. Please tell me your name so I can manipulate it.");
    console.log("userName =", userName);

    // split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);

    // sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    // join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted= ", nameSorted);
    return nameSorted;
}

function main() {
    // output
    document.writeln("Oh hi, I changed your name: ", sortName(), "</br>");
}

main();