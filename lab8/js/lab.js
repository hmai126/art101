// lab.js - This JavaScript file 
// Author: Hilton Mai
// Date: May 4, 2023

function addNum(x) {
    var results = x + 5;
    return results;
}

// test addNum()
console.log("5 + 5 = ", addNum(5));
console.log("2 + 5 = ", addNum(2));

var numArray = [1, 2, 6, 9, 7, 10];
console.log("My array: ", numArray);
document.writeln("Original Array: ", JSON.stringify(numArray, null, '\t'), "</br>");

var result = numArray.map(addNum);
// should return [6, 7, 11, 14, 12, 15]
console.log("Test of array elements + 5: ", result);
document.writeln("Here are the array elements + 5: ", JSON.stringify(result, null, '\t'), "</br>");

var result = numArray.map(function(x) {
    return x ** 2;
})

// should return [1, 4, 36, 81, 49, 100]
console.log("This array squared is: ", result)
document.writeln("Here are the array elements squared: ", JSON.stringify(result, null, '\t'));
