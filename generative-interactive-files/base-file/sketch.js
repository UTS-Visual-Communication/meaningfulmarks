/**
	* ABOUT THIS FILE
	* You can use this file to play with learning commands that are used for drawing in code .
	* Lines that begin with //, and appear grey are 'commented' out, this means that the line of code will not be executed.
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
	/**
		* SET THE BACKGROUND OF YOUR SKETCH HERE
		* background(r,g,b) draws a colour background each time draw loops and runs the commands inside its curly brackets
		* Here we are using RGB (red, green, blue) values to set the colour
		* To change to a new RGB colour Google 'rgb picker' and Google will bring up a Colour Picker where you can find
		* RGB values for a different colour
		* we will look at colour commands next week but in the meantime you can edit the below values between 0 and 255 and see what happens! Read more about colour here https://p5js.org/learn/color.html
	**/
	background(66, 134, 244);
	/*
	 * CHANGE BETWEEN ONE IMAGE AND ANOTHER HERE
	 * This code structure draws one image if the mouse is pressed and a different image if it is not
	*/

	if (mouseIsPressed) {
		//when the mouse is pressed run the code that is inside this set of curly brackets i.e. draw an ellipse
		ellipse(200, 200, 50, 50);
	} else {
		//else if the mouse is not pressed run the code inside this set of curly brackeys i.e. draw a square
		rect(175, 175, 50, 50);
		/*
		 * BASIC DRAWING COMMANDS
		 * Below are listed some basic drawing commands. To discover what they do uncomment them by removing the '//' or comment lines out  out by adding '//'
		 point(x,y) draws a single point at a x,y co-ordinate
		 line(x1,y1,x2,y2) draws a line between two co-ordinates
		 rect(x,y,w,h) draws a rectangle at 'x, y' co-rdinates of 'w' width and 'h' height
		 triangle(x1,y1,x2,y2,x3,y3) draws a triangle between 3 co-ordinates
		 quad(x1,y1,x2,y2,x3,y3,x4,y4) draws a quad between 4 co-ordinates
		*/
		//point(200,150);
		//line(0,200,400,200); //
		//rect(175, 330, 50, 50);
		//ellipse(200, 140, 50, 50);
		//triangle(200,230,230,270,170,270);
		//quad(230,280,170,280,150,320,250,320);
	}
}
