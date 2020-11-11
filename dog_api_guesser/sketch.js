let classifier;
let img;
let parser;
let message;

function gotResults(error, data) {
	console.log(message);
	var correct = false;
	var name = message.slice(30, -1).split("/")[0].split("-");
	if (error) {
		console.error(error);
	} else {
		console.log(data);
		var guess = document.getElementById('ai_guesser');
		guess.innerHTML = "I think it's a " + data[0].label;
		formattedGuesses = data[0].label.split(", ");
		console.log(formattedGuesses);
		console.log(name.join(" "));
		for (i = 0; i < formattedGuesses.length; i++){
			guess = formattedGuesses[i].toLowerCase()
			correctGuess = guess == name.join(" ") || guess == name.reverse().join(" ")
			//need to finish up logic on getting the correct answer as it doesn't work properly
			if (correctGuess) {
				correct = true;
			}
		}
		if (correct) {
			win = document.getElementById('ai_rightorwrong');
			win.innerHTML = "Correct";
			win.style.color = "green";
		} else {
			win = document.getElementById('ai_rightorwrong');
			win.innerHTML = "Wrong";
			win.style.color = "red";
		}
	}
}

function imageReady() {
	console.log("Image Ready");
	image(img, 0, 0, width, height);
	classifier.classify(img, gotResults);
}

function setup() {
	var canvas = createCanvas(windowWidth/2, windowHeight/2);
	canvas.position((windowWidth-width)/2, (windowHeight-height)/2); //centering it because css won't work
	classifier = ml5.imageClassifier('MobileNet', randomDoggo);
}

function randomDoggo() {
	//Ajax to load the dog-ceo-api
	const HTTP = new XMLHttpRequest();
	const url = "https://dog.ceo/api/breeds/image/random";
	message = "https://images.dog.ceo/breeds/retriever-golden/n02099601_6980.jpg";
	HTTP.open("GET", url);
	HTTP.send();
	HTTP.onload = function() {
		if (this.status == 200) {
			data = HTTP.responseText;
			data = JSON.parse(data);
			message = data.message
			img = loadImage(message, imageReady);
		}
	}
}