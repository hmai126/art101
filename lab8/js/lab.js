// lab.js - This JavaScript file will utilize anonymous
//          and callback functions to edit elements in
//          an array.
// Author: Hilton Mai
// Date: May 4, 2023

function addNum(x) {
    var results = x + 5;
    return results;
}

function main() {
    // test addNum()
    console.log("5 + 5 = ", addNum(5));
    console.log("2 + 5 = ", addNum(2));

    var numArray = [1, 2, 6, 9, 7, 10];
    console.log("My array: ", numArray);

    // print original array to HTML file
    var printInfo  = document.getElementById("arrayInfo1");
    printInfo.innerHTML = "The Original Array: ";
    var outputEl = document.getElementById("scriptOutput1");
    outputEl.innerHTML = JSON.stringify(numArray, '\t');

    var result = numArray.map(addNum);
    // should return [6, 7, 11, 14, 12, 15]
    console.log("Test of array elements + 5: ", result);

    // print array with elements + 5 to HTML file
    var printInfo2 = document.getElementById("arrayInfo2");
    printInfo2.innerHTML = "The Array With Elements + 5: ";
    var outputEl2 = document.getElementById("scriptOutput2");
    outputEl2.innerHTML = JSON.stringify(result);

    // callback function to square a number
    var result = numArray.map(function(x) {
        return x ** 2;
    })

    // should return [1, 4, 36, 81, 49, 100]
    console.log("This array squared is: ", result)

    // print array with elements squared to HTML file
    var printInfo3 = document.getElementById("arrayInfo3");
    printInfo3.innerHTML = "The Array Elements Squared: ";
    var outputEl3 = document.getElementById("scriptOutput3");
    outputEl3.innerHTML = JSON.stringify(result);
}
