var MScards = document.getElementById("MSlist").innerHTML.toString("utf-8").split("\r\n");
var MEcards = document.getElementById("MElist").innerHTML.toString("utf-8").split("\r\n");
var MTcards = document.getElementById("MTlist").innerHTML.toString("utf-8").split("\r\n");
var SEcards = document.getElementById("SElist").innerHTML.toString("utf-8").split("\r\n");
var TEcards = document.getElementById("TElist").innerHTML.toString("utf-8").split("\r\n");

console.log(MScards);

var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];

document.getElementById("monstercount").innerHTML = Mdeck.length;
document.getElementById("spellcount").innerHTML = Sdeck.length;
document.getElementById("trapcount").innerHTML = Tdeck.length;
document.getElementById("extracount").innerHTML = Edeck.length;

generateSequence();
function generateSequence(){
	var sequence = [];
	for (var i = 0; i < 5; i++){
		MStoSequence(sequence);
		MEtoSequence(sequence);
		MTtoSequence(sequence);
		SEtoSequence(sequence);
		TEtoSequence(sequence);
	}
	shuffleSequence(sequence);
	sequence.unshift("foundation");
	console.log(sequence);
	runSequence(sequence);
}
function MStoSequence(sequence){
	sequence.push("MS");
}
function MEtoSequence(sequence){
	sequence.push("ME");
}
function MTtoSequence(sequence){
	sequence.push("MT");
}
function SEtoSequence(sequence){
	sequence.push("SE");
}
function TEtoSequence(sequence){
	sequence.push("TE");
}
function shuffleSequence(sequence){
	for (var i = sequence.length -1; i > 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = sequence[i];
		sequence[i] = sequence[j];
		sequence[j] = temp;
	}
}

function runSequence(sequence){
	// console.log(sequence);
	var category = sequence[0].toString();
	setChoices(sequence, category);
}

function setChoices(sequence, category){
	console.log(category);
	document.getElementById("choice1").innerHTML = "Hello | Goodbye";
	document.getElementById("choice2").innerHTML = "Greetings | Farewell";
	$("#first").click(function(){
		var selected = document.getElementById("choice1").innerHTML;
    	addtodeck(sequence, selected, category);
	});
	$("#second").click(function(){
		var selected = document.getElementById("choice2").innerHTML;
		addtodeck(sequence, selected, category);
	});
}
function addtodeck(sequence, selected, category){
	if (category == "foundation"){
		console.log(selected);
		var card1 = selected.split('|')[0].trim();
		console.log(selected);
		var card2 = selected.split('|')[1].trim();
		// var card3 = selected.split('|')[2].trim();
		// var card4 = selected.split('|')[3].trim();
		// var card5 = selected.split('|')[4].trim();
	}
	else
	{	
		var card1 = selected.split('|')[0].trim();
		var card2 = selected.split('|')[1].trim();
	}
	if (category =="foundation"){
		Mdeck.push(card1);
		Mdeck.push(card2);
		// Mdeck.push(card3);
		// Mdeck.push(card4);
		// Mdeck.push(card5);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
		// document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card3 + "<br />";
		// document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card4 + "<br />";
		// document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card5 + "<br />";
	}
	if (category =="MS"){
		Mdeck.push(card1);
		Sdeck.push(card2);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="ME"){
		Mdeck.push(card1);
		Edeck.push(card2);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="MT"){
		Mdeck.push(card1);
		Tdeck.push(card2);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="SE"){
		Sdeck.push(card1);
		Edeck.push(card2);
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="TE"){
		Tdeck.push(card1);
		Edeck.push(card2);
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	document.getElementById("monstercount").innerHTML = (Mdeck.length);
	document.getElementById("spellcount").innerHTML = (Sdeck.length);
	document.getElementById("trapcount").innerHTML = (Tdeck.length);
	document.getElementById("extracount").innerHTML = (Edeck.length);
	sequence.shift();
	runSequence(sequence);
}

