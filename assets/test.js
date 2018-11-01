document.getElementById("choice1").innerHTML = "Hello | Goodbye";
document.getElementById("choice2").innerHTML = "Greetings | Farewell";
console.log(generateSequence());

var MScards = document.getElementById("MSlist").innerHTML.toString("utf-8").split("\r\n");
// var MEcards = document.getElementById("MElist").innerHTML.toString("utf-8").split("\r\n");
// var MTcards = document.getElementById("MTlist").innerHTML.toString("utf-8").split("\r\n");
// var SEcards = document.getElementById("SElist").innerHTML.toString("utf-8").split("\r\n");
// var TEcards = document.getElementById("TElist").innerHTML.toString("utf-8").split("\r\n");

console.log(MScards);

var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];

document.getElementById("monstercount").innerHTML = Mdeck.length;
document.getElementById("spellcount").innerHTML = Sdeck.length;
document.getElementById("trapcount").innerHTML = Tdeck.length;
document.getElementById("extracount").innerHTML = Edeck.length;

var category;
category = "MS";
$("#first").click(function(){
	var selected = document.getElementById("choice1").innerHTML;
    addtodeck(selected);
});
$("#second").click(function(){
	var selected = document.getElementById("choice2").innerHTML;
	// document.getElementById("monsterlist").innerHTML += selected + "<br />";
	addtodeck(selected);
});
function addtodeck(selected){
	var card1 = selected.split('|')[0].trim();
	var card2 = selected.split('|')[1].trim();
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

	}


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
	return sequence;
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
function runSequence(){
	
}