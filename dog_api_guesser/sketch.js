let classifier;
let img;
let parser;
let message;

function gotResults(error, data) {
	console.log(message);
	var correct = true;
	var name = message.slice(30, -1).split("/")[0].split("-");
	if (error) {
		console.error(error);
	} else {
		console.log(data);
		var guess = document.getElementById('ai_guesser');
		guess.innerHTML = "I think it's a " + data[0].label;
		formattedGuesses = data[0].label.split(", ").join("");
		formattedGuesses = formattedGuesses.split("-").join("").toLowerCase();
		console.log(formattedGuesses);
		console.log(name.join(""));
		for (i = 0; i < name.length; i++){
			if (formattedGuesses.includes(name[i]) != true) {
				correct = false
			}
		}
		if (correct) {
			win = document.getElementById('ai_rightorwrong');
			win.innerHTML = "Correct";
			win.style.color = "green";
		} else {
			win = document.getElementById('ai_rightorwrong');
			win.innerHTML = "Wrong, it was a " + name.join(" ");
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
	predict();
}

function predict(){
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