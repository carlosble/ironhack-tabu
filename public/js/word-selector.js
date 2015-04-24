$( document ).ready(function() {
    $("#start").on('click', function(param1){
		console.log(param1);
		var targetBox = $("#result");
		var sourceText = $("#username").val();
		var reversedText = sourceText.split("").reverse().join("");
		targetBox.val(reversedText);
	});
	var originalSize = $("#username").css("font-size");
	$("#username").on('mouseover', function(){
		console.log("hi");
		$(this).css("font-size", "200%");
	});
	
	$("#username").on('mouseleave', function(){
		console.log("bye");
		$(this).css("font-size",originalSize)
	});




});





var cards = {elefante: ["trompa", "grande", "dumbo", "orejas"],
			pingpong: ["mesa", "tenis", "red", "pelota"],
			italia: ["país", "pasta", "pizza", "europa"],
			sol: ["día", "astro", "luz", "calor"]};


function pickRandomCardKey(cards) {
	var result;
	var count=0;
	for (var item in cards){
		if (Math.random() < 1/++count){
			result = item;
		}}
		return result;	
}

function getCard(result) {
	var string_array= cards[result];
	string_array.push(result);
	return string_array;
}




	
}
