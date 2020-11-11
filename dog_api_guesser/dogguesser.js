name = "";

function showDog(){
	//Using Ajax to return data from the url
	const HTTP = new XMLHttpRequest();
	const url = "https://dog.ceo/api/breeds/image/random"
	HTTP.open("GET", url);
	HTTP.send();
	HTTP.onreadystatechange= function() {
		if (this.status == 200) {
			data = HTTP.responseText;
			data = JSON.parse(data);
			message = data["message"];
			name = message.slice(30, -1);
			var canvas = document.getElementById('DogImage');
			canvas.src = message.toString();
		}
	}
	
}

function guessDog(){
	showDog();
}

window.onload = showDog();