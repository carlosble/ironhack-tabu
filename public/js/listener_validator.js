// <input type="text" id="string_container"></input>


setInterval(checkstring, 1000);
temp = "";

function checkstring(){

	var string_source = $("#string_container").val();
		
	if (string_source == temp){
		console.log("no cambio");
		return true;
		//NO invoca a la funcion
	}
	else{
		temp = string_source;
		console.log("cambio");
		//invoca a la funcion
	}
}


