name = "";
points = 0;

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
			name = name.split("/")[0];
			var canvas = document.getElementById('DogImage');
			canvas.src = message.toString();
		}
	}
	
}

function guessDog(){
	var scoretext = document.getElementById('scoretext');
	var score = document.getElementById('Score');
	var guess = guessbox.value;
	guessbox.value = null;
	formattedGuess = guess.toLowerCase();
	formattedName = name.split("-").join(" ").toLowerCase();
	console.log(formattedGuess);
	console.log(formattedName);
	if (formattedGuess == formattedName){
		points += 2;
		scoretext.innerHTML = "Good Guess!";
		score.innerHTML = "Score: " + points;
	} else {
		scoretext.innerHTML = "It was a " + formattedName + ". Unlucky!";
	}
	showDog();
}

window.onload = showDog();