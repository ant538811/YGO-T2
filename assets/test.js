document.getElementById("choice1").innerHTML = "Hello | Goodbye";
document.getElementById("choice2").innerHTML = "Greetings | Farewell";
console.log(generateSequence());
<<<<<<< HEAD

=======
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
// var fs = require("fs");
// var MScards = fs.readFileSync("./MR4/MScards.txt").toString('utf-8').split("\r\n");
// var MEcards = fs.readFileSync("./MR4/MEcards.txt").toString('utf-8').split("\r\n");
// var MTcards = fs.readFileSync("./MR4/MTcards.txt").toString('utf-8').split("\r\n");
// var SEcards = fs.readFileSync("./MR4/SEcards.txt").toString('utf-8').split("\r\n");
// var TEcards = fs.readFileSync("./MR4/TEcards.txt").toString('utf-8').split("\r\n");
<<<<<<< HEAD
var MScards = document.getElementById("MSlist").innerHTML.toString("utf-8").split("\r\n");
// var MEcards = document.getElementById("MElist").innerHTML.toString("utf-8").split("\r\n");
// var MTcards = document.getElementById("MTlist").innerHTML.toString("utf-8").split("\r\n");
// var SEcards = document.getElementById("SElist").innerHTML.toString("utf-8").split("\r\n");
// var TEcards = document.getElementById("TElist").innerHTML.toString("utf-8").split("\r\n");

console.log(MScards);
=======
// $.get("./MR4/MScards.txt", function (data){
// 	var items = data.toString('utf-8').split("\r\n");
// 	console.log(items);
// })

jQuery.get('http://localhost/foo.txt', function(data) {
    var myvar = data;
});

var monstercount = 0;
var spellcount = 0;
var trapcount = 0;
var extracount = 0;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b

var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];

<<<<<<< HEAD
document.getElementById("monstercount").innerHTML = Mdeck.length;
document.getElementById("spellcount").innerHTML = Sdeck.length;
document.getElementById("trapcount").innerHTML = Tdeck.length;
document.getElementById("extracount").innerHTML = Edeck.length;
=======


document.getElementById("monstercount").innerHTML = monstercount;
document.getElementById("spellcount").innerHTML = spellcount;
document.getElementById("trapcount").innerHTML = trapcount;
document.getElementById("extracount").innerHTML = extracount;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b

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
<<<<<<< HEAD
		Mdeck.push(card1);
		Sdeck.push(card2);
=======
		monstercount++;
		spellcount++;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="ME"){
<<<<<<< HEAD
		Mdeck.push(card1);
		Edeck.push(card2);
=======
		monstercount++;
		extracount++;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="MT"){
<<<<<<< HEAD
		Mdeck.push(card1);
		Tdeck.push(card2);
=======
		monstercount++;
		trapcount++;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="SE"){
<<<<<<< HEAD
		Sdeck.push(card1);
		Edeck.push(card2);
=======
		spellcount++;
		extracount++;
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
		document.getElementById("spelllist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	if (category =="TE"){
<<<<<<< HEAD
		Tdeck.push(card1);
		Edeck.push(card2);
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	document.getElementById("monstercount").innerHTML = (Mdeck.length);
	document.getElementById("spellcount").innerHTML = (Sdeck.length);
	document.getElementById("trapcount").innerHTML = (Tdeck.length);
	document.getElementById("extracount").innerHTML = (Edeck.length);
=======
		trapcount++;
		extracount++;
		document.getElementById("traplist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("extralist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
	}
	document.getElementById("monstercount").innerHTML = (monstercount.toString());
	document.getElementById("spellcount").innerHTML = (spellcount.toString());
	document.getElementById("trapcount").innerHTML = (trapcount.toString());
	document.getElementById("extracount").innerHTML = (extracount.toString());
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
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
<<<<<<< HEAD
	sequence.unshift("foundation");
=======
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
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
<<<<<<< HEAD
}
function runSequence(){
	
=======
>>>>>>> c559e77ed7a68bb1e4d48f4272df782e7ccdb94b
}