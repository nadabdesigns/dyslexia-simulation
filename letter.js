// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js

const gravity = 1; // accelerate 1 pixel per frame
let velocity = 0;
let y = 10;
let x = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  // numerically integrate the velocity and position
  velocity += gravity;
  y += velocity;

  // bounce off the bottom
  if (y > height) {
    y = height;
    velocity = -abs(velocity)+18;
  }

  background("black");
  fill("white");
  noStroke();
  textSize(60);
  text("D",x,y);
    text("D",2*x,y);
    text("Y",3*x,y);
    text("S",4*x,y);
    text("L",5*x,y);
  text("E",6*x,y);
   text("X",7*x,y);
   text("I",8*x,y);
  text("A",9*x,y);
}
