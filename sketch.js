let angle = 0;
let x = 0;
let y = 0;
let speed = 15
let distArray = []
let dist = 0
for (let i = 0; i < 360; i++) {
    distArray.push(250);
}
for (let i = 30; i < 60; i++) {
    distArray[i] = 100;
}

for (let i = 300; i < 330; i++) {
    distArray[i] = 100;
}

function setup() {
  createCanvas(500, 300);
  background(0, 0, 0);
}

function draw() {
  background(0, 0, 0, 15);
  drawSonar();
  var scan = scanLine(x, y, angle);
  x = scan[0]
  y = scan[1]
  angle = scan[2]
  frameRate(30)
}

function scanLine(x, y, angle) {
  x = cos(angle/180*PI) * 250
  y = abs(sin(angle/180*PI)) * 250
  angle += (speed / 30)
  if (angle > 360) {
    angle = 0
  }
  let dist = 250-distArray[Math.floor(angle)]
  strokeWeight(2)
  stroke(150, 0, 0)
  line(250, height, 250+x, height-y)
  stroke(0, 100, 0)
  line(250, height, (250-dist*cos(angle/180*PI))+x, (height+dist*abs(sin(angle/180*PI)))-y)
  return [x, y, angle]
}

function drawSonar(){
  noFill();
  stroke(0, 100, 0)
  strokeWeight(3.25)
  ellipse(250, height, 100, 100);
  ellipse(250, height, 200, 200);
  ellipse(250, height, 300, 300);
  ellipse(250, height, 400, 400);
  ellipse(250, height, 500, 500);
  line(250, height, 250, height-250)
  line(250, height, 125, height-216)
  line(250, height, 375, height-216)
  line(250, height, 34, height-125)
  line(250, height, 500-34, height-125)
  line(250, height, 0, height)
  line(250, height, 500, height)
  strokeWeight(1)
  text("0°", 250-3, height-255)
  text("30°", 125-8, height-216-6)
  text("30°", 375, height-216-6)
  text("60°", 34-20, height-125)
  text("60°", 500-34+5, height-125)
}