var foundation = document.getElementById("foundation").innerHTML.toString("utf-8").split("<br>");
var MScards = document.getElementById("MSlist").innerHTML.toString("utf-8").split("<br>");
var MEcards = document.getElementById("MElist").innerHTML.toString("utf-8").split("<br>");
var MTcards = document.getElementById("MTlist").innerHTML.toString("utf-8").split("<br>");
var SEcards = document.getElementById("SElist").innerHTML.toString("utf-8").split("<br>");
var TEcards = document.getElementById("TElist").innerHTML.toString("utf-8").split("<br>");
// console.log(MScards);

var Mdeck = [];
var Sdeck = [];
var Tdeck = [];
var Edeck = [];

document.getElementById("monstercount").innerHTML = Mdeck.length;
document.getElementById("spellcount").innerHTML = Sdeck.length;
document.getElementById("trapcount").innerHTML = Tdeck.length;
document.getElementById("extracount").innerHTML = Edeck.length;

var sequence = [];
var category;
generateSequence();
console.log(sequence);
iterateSequence();
setChoices(category);
if ((Mdeck.length < 20) && (Sdeck.length < 10) && (Tdeck.length < 10) && (Edeck.length < 15))
{ 
	$("#first").click(function(){
		var selected = document.getElementById("choice1").innerHTML;
		console.log("first");
	});
	$("#second").click(function(){
		var selected = document.getElementById("choice2").innerHTML;
		console.log("second");
	});
}
function generateSequence(){
	for (var i = 0; i < 5; i++){
		MStoSequence(sequence);
		MEtoSequence(sequence);
		MTtoSequence(sequence);
		SEtoSequence(sequence);
		TEtoSequence(sequence);
	}
	shuffleSequence(sequence);
	sequence.unshift("foundation");
	// return sequence;
	// console.log(sequence);
	// iterateSequence(sequence);
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

function iterateSequence(){
	category = sequence[0].toString();
}

function setChoices(category){
	// console.log(category);
	// category = "MS";
	if (category == "MS"){
		var list = MScards;
	}
	else if (category == "ME"){
		var list = MEcards;
	}
	else if (category == "MT"){
		var list = MTcards;
	}
	else if (category == "SE"){
		var list = SEcards;
	}
	else if (category == "TE"){
		var list = TEcards;
	}
	else {
		var list = foundation;
	}
	var random1 = Math.floor(Math.random() * list.length) - 1;
	if (random1 < 0){
		random1 = 0;
	}
	var set1 = list[random1];
	var display1 = set1.split("|").join("<br>");
	
	document.getElementById("choice1").innerHTML = display1;
	list.splice(random1, 1);
	var random2 = Math.floor(Math.random() * list.length) - 1;
	if (random2 < 0){
		random2 = 0;
	}
	var set2 = list[random2];
	var display2 = set2.split("|").join("<br>");
	document.getElementById("choice2").innerHTML = display2;	
	list.splice(random2, 1);
}

function addtodeck(sequence, selected, category){
	if (category == "foundation"){
		var card1 = selected.split('|')[0].trim();
		var card2 = selected.split('|')[1].trim();
		var card3 = selected.split('|')[2].trim();
		var card4 = selected.split('|')[3].trim();
		var card5 = selected.split('|')[4].trim();
	}
	else
	{	
		var card1 = selected.split('|')[0].trim();
		var card2 = selected.split('|')[1].trim();
	}
	if (category =="foundation"){
		Mdeck.push(card1);
		Mdeck.push(card2);
		Mdeck.push(card3);
		Mdeck.push(card4);
		Mdeck.push(card5);
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card1 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card2 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card3 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card4 + "<br />";
		document.getElementById("monsterlist").innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + card5 + "<br />";
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
	iterateSequence(sequence);
}

