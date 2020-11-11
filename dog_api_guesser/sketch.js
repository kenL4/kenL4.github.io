let classifier;
let img;

function modelReady() {
	console.log("Model Ready");
	classifier.classify(img, gotResults);
}

function gotResults(error, data) {
	if (error) {
		console.error(error);
	} else {
		console.log(data);
	}
}

function imageReady() {
	console.log("Image Ready");
	image(img, 0, 0, width, height);
}

function setup() {
	var canvas = createCanvas(windowWidth/2, windowHeight/2);
	canvas.position((windowWidth-width)/2, (windowHeight-height)/2);
	img = loadImage(randomDoggo(), imageReady);
	classifier = ml5.imageClassifier('MobileNet', modelReady);
}

function randomDoggo() {
	//Ajax to load the dog-ceo-api
	const HTTP = new XMLHttpRequest();
	const url = "https://dog.ceo/api/breeds/image/random"
	HTTP.open("GET", url);
	HTTP.send();
	HTTP.onreadystatechange= function() {
		if (this.status == 200) {
			data = HTTP.responseText;
			data = JSON.parse(data);
			message = data["message"];
			return message.toString();
		}
	}
}
function pred(){
	img = loadImage(randomDoggo(), imageReady);
	classifier.classify(img, gotResults);
}