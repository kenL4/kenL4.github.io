let classifier;
let parrot;

function modelReady() {
	console.log("Model Ready");
	classifier.classify(parrot, gotResults);
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
	image(parrot, 0, 0, width, height);
}

function setup() {
	createCanvas(640, 480);
	parrot = loadImage("parrot.jpg", imageReady);
	classifier = ml5.imageClassifier('MobileNet', modelReady);
}