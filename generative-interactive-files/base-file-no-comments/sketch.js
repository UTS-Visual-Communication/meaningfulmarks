/**
	* ABOUT THIS FILE
	* This file can be used as the base file for your assignment
	* This code is written using p5.js see https://p5js.org/
**/

//the code inside these curly brackets runs once when you first load the sketch
function setup() {
	//this line creates the canvas and sets its width and height at 400px
	var canvas = createCanvas(400, 400);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
}

// the code inside these curly brackets runs over and over again
function draw() {
	//draw a background
	background(66, 134, 244);
	//set the fill to black
	//fill(0);
	if (mouseIsPressed) {
		//when mouse is pressed draw this image
		ellipse(200, 200, 50, 50);
	} else {
		//when mouse is released draw this image
		rect(175, 175, 50, 50);
	}
}
