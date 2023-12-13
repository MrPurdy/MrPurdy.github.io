var gap = 10;
var cirNum = 40;
var cirSize = 20;
var angle = 0;
var ptNum = 100;
var rectSize = 600;
// Mouse move left - rotate counterclockwise
// Mouse move right - rotate clockwise


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background('black');
  
  // Customize mouse
  noCursor();
  noStroke();
  fill('white');
  circle(mouseX, mouseY, 5);
  
  
  push();
  translate(width/2, height/2);
  rotate(angle);
  angle += map(mouseX, 0, width, -0.1, 0.1);
  noFill();
  stroke('white');
  strokeWeight(1);
  for (var lcv = 0; lcv < cirNum; lcv++) {
    arc(0, 0, cirSize + gap * lcv, cirSize + gap * lcv, angle * lcv, 360 - angle/2);
  }
  pop();
  
  
  push();
  translate(width/2, height-90);
  noStroke();
  textFont('Arial');
  textSize(10);
  textAlign(CENTER, CENTER);
  text("Album Title Here", 0, 0);
  textSize(8);
  text("This is a demo", 0, 20);
  pop();
  
  
  push();
  translate(width/2, height/2);
  noFill();
  stroke('white');
  strokeWeight('2');
  rectMode(CENTER);
  
  stroke('white');
  strokeWeight(1);
  for (var lcv = 0; lcv < ptNum; lcv++) {
    point(random(-rectSize/2, rectSize/2),
         random(-rectSize/2, rectSize/2));
  }
}