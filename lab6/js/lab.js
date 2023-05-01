// lab.js - This JavaScript file will print data from an array and object onto a webpage.
// Author: Hilton Mai
// Date: April 28, 2023

// Constants

// Functions

// this is an example function and this comment tells what it does and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  // Define variables
  var myTransport = ["E-bike", "Honda Accord", "Metro Bus"];

  // Create an object for my main ride
  var myMainRide = {
    make: "Honda",
    model: "Accord",
    color: "white",
    year: 2021,
    age: function() {
        return 2023 - this.year;
    }
  }

  // Output
  document.writeln("Kinds of transportation I use: ", myTransport, "</br>");

  // Write an object to the document
  document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
