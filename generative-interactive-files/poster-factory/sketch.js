//To play with the code you can change the
//number of rounds value below, at the moment
//it will loop through the code and draw dots and lines 25 times
//make this number smaller or larger to see what happens
var numberOfRounds = 25;


var dots = [];
var lines = [];
var lastDotY;
var w =450;
var h =600;

function setup() {
	var canvas = createCanvas(w, h);
	//this is not so important for you, just leave as it is!
	canvas.parent('sketch-holder');
	for (var i=0; i<numberOfRounds; i++) {
    drawDot();
    drawDot();
    drawLine();
  }
}


function draw() {
	background(255);
  for (var i=0; i<dots.length; i++) {
    dots[i].display();
  }
  for (var i=0; i<lines.length; i++) {
    lines[i].display();
  }
}

function mousePressed() {
   dots = [];
   lines = [];
   for (var i=0; i<numberOfRounds; i++) {
    drawDot();
    drawDot();
    drawLine();
  }

}

function drawDot () {
  var x=0;
  var y=0;
  if (lastDotY > 1) {
    x = random(width);
    y = random(-150, 150)+lastDotY;
    if (y < 0) {
      y=y+random(100);
    }
    else if (y > height) {
      y = y -random(100);
    }
  }
  else {
    x = random(width);
    y = random(height);
  }
  lastDotY = y;
	dots.push(new Dot(x,y));
}

function drawLine() {
  var l;
  if (lines.length < 1) {
    var r1 = int(random(0, dots.length));
    var r2 = int(random(0, dots.length));
    l = new LineDotDot(dots[r1], dots[r2]);
  }
  else {
    var r1 = int(random(0, dots.length));
    var r2 = int(random(0, lines.length));
    l = new LineDotLine(dots[r1], lines[r2]);
  }
	lines.push(l);
}

function Dot (px, py) {
    this.x = px;
    this.y = py;
    this.rn = random(1);
		this.size=0;
		this.c = color(0,0,0);
    //size = int(random(1,3))*10;

		if (this.rn<0.75) {
      this.size = 10;
      var r = random(1);
      if (r<0.3) {
        this.c = color(44,160,83);
      } else {
        this.c = color(0);
      }

    } else {
      this.size=25;
      this.c = color(255,125,3);
    }
    noStroke();


  this.display = function () {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

function LineDotDot (d1,d2) {
    this.x1 = d1.x;
    this.x2 = d2.x;
    this.y1 = d1.y;
    this.y2 = d2.y;
		this.w=0;
		this.s = color(0,0,0);

  this.display = function () {
    stroke(this.s);
    strokeWeight(this.w);
    noFill();
    line(this.x1, this.y1, this.x2, this.y2);
  }
}

function LineDotLine (d1,d2) {
    this.x1 = d1.x;
    this.y1 = d1.y;
    var r = random(1);
    this.x2 = lerp(d2.x1, d2.x2, r);
    this.y2 = lerp(d2.y1, d2.y2, r);
		this.w=0;
		this.s = color(0,0,0);
    var rn = random(1);
    if (rn<0.75) {
      this.w=1;
      this.s = color(103, 15, 43);
    }
    else {
      this.w=4;
      r = random(1);
      if (r<0.5) {
        this.s = color(209, 168, 234);
      }
      else {
        this.s = color(68, 93, 211);
      }
    }
    //println(w);


  this.display = function () {
    stroke(this.s);
    strokeWeight(this.w);
    noFill();
    line(this.x1, this.y1, this.x2, this.y2);
  }
}
