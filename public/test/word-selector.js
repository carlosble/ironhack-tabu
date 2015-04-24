

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

