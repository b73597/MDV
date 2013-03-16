// Getting familiar with the terminal. (pushing files/pulling files)
//alert("JavaScript works!");

// Eddy O. Davila
// SDI 1303
// Project 2

//Ed Davila The RockStar

// my variables
var rockStar = "Ed Davila";
var minutesPerCountry = [120, 80, 40, 60];
//took a break twice in his career.
//and played exotic countryNames like:
var countryNames = [" USA" , " Brazi" , " Germany" , " Thailand"];
var prefGear = " Rich Guitars";

console.log("RockStar and musical legend " + rockStar)
console.log("will be producing his new album in " + countryNames + ". " + minutesPerCountry + "minutes respectively");

//Procedure

var soloWork = function(first, second){
	var produced = first+second;
	console.log("He will Produced " + produced + " songs");
};
soloWork(10,10); 

// Boolean Conditional
var myFunction = function (arg1,arg2) {
	var finalFunction = myFunction;
	if (arg2 === 0){
		return "He can fool the public, thats for sure";	
	}else {
		return  arg1/arg2;
	}
};

var finFunction = myFunction(100,50);
console.log("this could result in the 20 new classics of tomorrow " + finFunction);

var mySecFinFunction = myFunction(finFunction,0);
console.log("Or just a commercial stunt to raise money fast. " + mySecFinFunction);

//Number Function
var days = 10;

while (days > 0) {
console.log(days + " days till recording begins");
console.log(days + " days to write new songs");
console.log("Finish song and move on to the next");


days = days - 1;

if (days > 0) {
console.log(days + " Recording cannot begin");

}else {
	console.log( "Recording Begins");

	}
}
console.log("Let's get to work");

// String Function

var myString = function (rockStar , prefGear) {
	var ayPlusWai = rockStar+prefGear;
	return ayPlusWai;
};

var finString = myString(rockStar + " uses " + prefGear);
console.log("For his recordings " + finString);

var secFinString = myString(finString,5);


//Array Function
var playOneShow = function () {
var countryName = countryNames[countryNumber],
		minutesThisCountry = minutesPerCountry[countryNumber];
	console.log("Started recording in " + countryName + " for " 
		+ minutes + " minutes");
	for (var minutes = 0; minutes < minutesThisCountry; minutes+= 10) {
		var minutesRemain = minutesThisCountry - minutes;
		console.log(minutes + " minutes passed " + minutesRemain + " minutes remain ");
	}
	console.log("Im done recording in " + countryName + " . ");
};

for (var countryNumber =0; countryNumber < countryNames.length; countryNumber++) {
	playOneShow();
};

