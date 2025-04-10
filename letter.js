// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
// 
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

	// creat engine
	var engine = Engine.create();

	// create a renderer and asigning it to body
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground first x then y then width and height
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var boxC = Bodies.rectangle(450, 50, 80, 80);
var boxD = Bodies.rectangle(450, 50, 80, 80);
var boxE = Bodies.rectangle(450, 50, 80, 80);

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });


// add all of the bodies to the world
Composite.add(engine.world, [boxA, boxB,boxC, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);



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
