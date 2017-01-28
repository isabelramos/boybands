var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = 5;

// Keep track of which band we're on in the loop
var currentBand = "";

// Keep track of which veggie we're on in the loop
var currentVeggie = "";

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");

// Start looping

var outputBands = "";
var outputVeggies = "";

for (var b=0; b<bands.length; b++) {
	outputBands+=bands[b] + " ";
}


  // Add the band names into the correct <div>
  // currentBand = innerHTML("boy-bands");
  bandElement.innerHTML = outputBands;


for (var v=0; v<vegetables.length; v++) {
	outputVeggies+=vegetables[v] + " ";
}

  // Add the veggie names into the correct <div>
  // currentVeggie = innerHTML("vegetables");
  veggieElement.innerHTML = outputVeggies;
