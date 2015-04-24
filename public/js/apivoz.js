$( document ).ready(function() {

	$("#play-button").on("click", function(){
		var selected_card = getCard(pickRandomCardKey(cards));
		$("#tabu-key").append(selected_card[selected_card.length-1]+"<br>");
		$("#tabu-words").append(selected_card[0]+"<br>");
		$("#tabu-words").append(selected_card[1]+"<br>");
		$("#tabu-words").append(selected_card[2]+"<br>");
		$("#tabu-words").append(selected_card[3]+"<br>");

	});


});