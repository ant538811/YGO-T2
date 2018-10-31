var startScreen;
var mainHTML;
// reads the text file and stores them into 
var fs = require("fs");
var MScards = fs.readFileSync("./MR4/MScards.txt").toString('utf-8').split("\r\n");
var MEcards = fs.readFileSync("./MR4/MEcards.txt").toString('utf-8').split("\r\n");
var MTcards = fs.readFileSync("./MR4/MTcards.txt").toString('utf-8').split("\r\n");
var SEcards = fs.readFileSync("./MR4/SEcards.txt").toString('utf-8').split("\r\n");
var TEcards = fs.readFileSync("./MR4/TEcards.txt").toString('utf-8').split("\r\n");
// for (var i = 0; i < MScards.length; i++){
// 	console.log((i+1) + " " + MScards[i]);
// }
var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];
// function will take in card list and generate a random stack of card choices
function generateMS(array)
{
	var randomindex = Math.floor(Math.random() * array.length);
	var choiceone = array[randomindex];
	// console.log(array[randomindex]);

	// removes the picked choices so that will not be picked again
	array.splice(randomindex, 1);

	randomindex = Math.floor(Math.random() * array.length);
	var choicetwo = array[randomindex];
	// console.log(array[randomindex]);
	array.splice(randomindex, 1);

	// calls function to pick choices
	pickMS(array, choiceone, choicetwo);
}

function pickMS(array, choiceone, choicetwo)
{
	// simulates a choice between choice one and two
	var testrng = Math.floor(Math.random() * 2);

	var pickedchoice;
	var chosenM;
	var chosenS;
	if (testrng == 0)
	{
		pickedchoice = choiceone.split('|');
	} 
	else if (testrng == 1)
	{
		pickedchoice = choicetwo.split('|');
	}
	chosenM = pickedchoice[0].trim();
	chosenS = pickedchoice[1].trim();
	Mdeck.push(chosenM);
	Sdeck.push(chosenS);
}
for (var i = 0; i < MScards.length; i++)
	{
		generateMS(MScards);
	}

	console.log("Mdeck: " + Mdeck);
	console.log("Sdeck: " + Sdeck);
	console.log("Tdeck: " + Tdeck);
	console.log("Edeck: " + Edeck);
// var cards = [
// 	['Hydrogeddon', 'Hydrogeddon'],
// 	['Speedroid Terrortop', 'Speedroid Taketomborg']
// ];

// console.log(cards[0][1]);

