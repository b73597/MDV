//alert("JavaScript works!");

// Eddy O. Davila
// SDI 1303
// Project 1
// First day of the rest of my life

// my variables
var myName = "Eddy Davila"
var takeBus = true;
var xtraDollar = 10;
var fastTime = "\"Local Bus\" Service";

// my outputs

console.log("My name is " + myName);
console.log("It is " + takeBus + " that I take the State Bus.");
console.log("I costs " + xtraDollar + "  dollars.");
console.log("I get to work faster with the " + fastTime + " for a dollar more.");

// my conditionals

if (takeBus === true) {
	if (xtraDollar >= 11) {
		xtraDollar = xtraDollar + 1;
		console.log ("If I have " + xtraDollar + " dollars , I can take the \"Local Bus\" and arrive faster.");
	} else {
		console.log("I cannot take the Local Bus service.");
	} 
} else {
		console.log("I do not take Public transportation.");
}
var yourName = myName + takeBus;
console.log(yourName);