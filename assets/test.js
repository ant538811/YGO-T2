var foundation = document.getElementById("foundation").innerHTML.toString("utf-8").split("<br>");
var MScards = document.getElementById("MSlist").innerHTML.toString("utf-8").split("<br>");
var MEcards = document.getElementById("MElist").innerHTML.toString("utf-8").split("<br>");
var MTcards = document.getElementById("MTlist").innerHTML.toString("utf-8").split("<br>");
var SEcards = document.getElementById("SElist").innerHTML.toString("utf-8").split("<br>");
var TEcards = document.getElementById("TElist").innerHTML.toString("utf-8").split("<br>");

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
// console.log(sequence);
iterateSequence();
 
	$("#first").click(function(){
		if (sequence.length !== 0){
			var selected = document.getElementById("choice1").innerHTML;
			addtodeck(sequence, category, true);
		}
	});

	$("#second").click(function(){
		if (sequence.length !== 0){
			var selected = document.getElementById("choice2").innerHTML;
			addtodeck(sequence, category, false);
		}
	});

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
	console.log(sequence);
	setChoices();
}

function setChoices(){
	document.getElementById("set1slot1").innerHTML = "";
	document.getElementById("set1slot2").innerHTML = "";
	document.getElementById("set1slot3").innerHTML = "";
	document.getElementById("set1slot4").innerHTML = "";
	document.getElementById("set1slot5").innerHTML = "";
	document.getElementById("set2slot1").innerHTML = "";
	document.getElementById("set2slot2").innerHTML = "";
	document.getElementById("set2slot3").innerHTML = "";
	document.getElementById("set2slot4").innerHTML = "";
	document.getElementById("set2slot5").innerHTML = "";
	document.getElementById("set1slot1").style = "background-color:white";
	document.getElementById("set1slot2").style = "background-color:white";
	document.getElementById("set1slot3").style = "background-color:white";
	document.getElementById("set1slot4").style = "background-color:white";
	document.getElementById("set1slot5").style = "background-color:white";
	document.getElementById("set2slot1").style = "background-color:white";
	document.getElementById("set2slot2").style = "background-color:white";
	document.getElementById("set2slot3").style = "background-color:white";
	document.getElementById("set2slot4").style = "background-color:white";
	document.getElementById("set2slot5").style = "background-color:white";
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
	var set1slot1 = set1.split("|")[0];
	var set1slot2 = set1.split("|")[1];
	document.getElementById("set1slot1").innerHTML = set1slot1;
	document.getElementById("set1slot2").innerHTML = set1slot2;

	list.splice(random1, 1);
	var random2 = Math.floor(Math.random() * list.length) - 1;
	if (random2 < 0){
		random2 = 0;
	}

	var set2 = list[random2];
	var set2slot1 = set2.split("|")[0];
	var set2slot2 = set2.split("|")[1];
	document.getElementById("set2slot1").innerHTML = set2slot1;
	document.getElementById("set2slot2").innerHTML = set2slot2;	
	list.splice(random2, 1);
	// console.log(list);
	// console.log(set1);
	// console.log(set2);
	if (category =="foundation"){
		var set1slot3 = set1.split("|")[2];
		var set1slot4 = set1.split("|")[3];
		var set1slot5 = set1.split("|")[4];
		var set2slot3 = set2.split("|")[2];
		var set2slot4 = set2.split("|")[3];
		var set2slot5 = set2.split("|")[4];

		document.getElementById("set1slot3").innerHTML = set1slot3;
		document.getElementById("set1slot4").innerHTML = set1slot4;
		document.getElementById("set1slot5").innerHTML = set1slot5;
		document.getElementById("set2slot3").innerHTML = set2slot3;
		document.getElementById("set2slot4").innerHTML = set2slot4;
		document.getElementById("set2slot5").innerHTML = set2slot5;
	}

	if (category == "foundation"){
		document.getElementById("set1slot1").style = "background-color:peru";
		document.getElementById("set1slot2").style = "background-color:peru";
		document.getElementById("set1slot3").style = "background-color:peru";
		document.getElementById("set1slot4").style = "background-color:peru";
		document.getElementById("set1slot5").style = "background-color:peru";
		document.getElementById("set2slot1").style = "background-color:peru";
		document.getElementById("set2slot2").style = "background-color:peru";
		document.getElementById("set2slot3").style = "background-color:peru";
		document.getElementById("set2slot4").style = "background-color:peru";
		document.getElementById("set2slot5").style = "background-color:peru";
	}

	if (category == "MS"){
		document.getElementById("set1slot1").style = "background-color:peru";
		document.getElementById("set1slot2").style = "background-color:darkcyan";
		document.getElementById("set2slot1").style = "background-color:peru";
		document.getElementById("set2slot2").style = "background-color:darkcyan";
	}

	if (category == "ME"){
		document.getElementById("set1slot1").style = "background-color:peru";
		document.getElementById("set1slot2").style = "background-color:green";
		document.getElementById("set2slot1").style = "background-color:peru";
		document.getElementById("set2slot2").style = "background-color:green";
	}

	if (category == "MT"){
		document.getElementById("set1slot1").style = "background-color:peru";
		document.getElementById("set1slot2").style = "background-color:deeppink";
		document.getElementById("set2slot1").style = "background-color:peru";
		document.getElementById("set2slot2").style = "background-color:deeppink";
	}

	if (category == "SE"){
		document.getElementById("set1slot1").style = "background-color:darkcyan";
		document.getElementById("set1slot2").style = "background-color:green";
		document.getElementById("set2slot1").style = "background-color:darkcyan";
		document.getElementById("set2slot2").style = "background-color:green";
	}

	if (category == "TE"){
		document.getElementById("set1slot1").style = "background-color:deeppink";
		document.getElementById("set1slot2").style = "background-color:green";
		document.getElementById("set2slot1").style = "background-color:deeppink";
		document.getElementById("set2slot2").style = "background-color:green";
	}

}

function addtodeck(sequence, category, choice){
	if (choice == true){
		var card1 = document.getElementById("set1slot1").innerHTML;
		var card2 = document.getElementById("set1slot2").innerHTML;

		if (category == "foundation"){
			var card3 = document.getElementById("set1slot3").innerHTML;
			var card4 = document.getElementById("set1slot4").innerHTML;
			var card5 = document.getElementById("set1slot5").innerHTML;
		}

	}
	else if (choice == false){
		var card1 = document.getElementById("set2slot1").innerHTML;
		var card2 = document.getElementById("set2slot2").innerHTML;

		if (category == "foundation"){
			var card3 = document.getElementById("set2slot3").innerHTML;
			var card4 = document.getElementById("set2slot4").innerHTML;
			var card5 = document.getElementById("set2slot5").innerHTML;
		}

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
	// iterateSequence(sequence);
	if (sequence.length == 0){
		alert("It's Time to Duel!");
	}
	else if (sequence.length !== 0){
		iterateSequence(sequence);
	}
}