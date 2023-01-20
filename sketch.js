var xPos = 150;
var yPos = 40;
var hyp = 500;
var ht = hyp/(2* Math.sqrt(3));
var side = ht*2;
var min = minute();

function setup() {
	createCanvas(800,600);
}

function draw() {
	background(0, 40, 0);
	var h = map(hour(), 0, 24, 0, ht);
	var m = map(minute(), 0, 60, 0, ht);
	var s = map(second(), 0, 60, 0, ht);

	// s base
	fill(0, 50, 0);
	triangle(xPos, yPos, xPos + hyp, yPos, xPos + hyp/2, yPos+ ht);

	// m base
	fill(0, 100, 0);
	triangle(xPos, yPos,xPos + hyp/2, yPos+ ht, xPos + hyp/2, yPos+ ht+ side);

	// h base
	fill(0, 150, 0);
	triangle(xPos + hyp, yPos, xPos + hyp/2, yPos+ ht, xPos + hyp/2, yPos+ side + ht);

	var x = xPos + hyp/2
	var y = yPos+ ht

	// s
	fill(0, 75, 50);
	triangle(x, y, x-s*sqrt(3), y-s, x+s*sqrt(3), y-s);

	// m
	fill(0,145,100);
	triangle(x, y, x-m*sqrt(3), y-m, x, y+2*m);

	// h
	fill(0, 255, 0);
	triangle(x, y, x+h*sqrt(3), y-h, x, y+2*h);

	// log minutes
	if (minute()!= min){
		console.log(minute())
		min = minute()
	}
  }
