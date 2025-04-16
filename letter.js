// require https://cdn.jsdelivr.net/npm/p5@latest/lib/p5.min.js
// This is where i'm adding in my matter js to make the shapes bonce aroung I cross referenced to matter.js documetation about bodies. I stared with this base https://github.com/liabru/matter-js/wiki/Getting-started and then crossreferenced  few tutorials and some pre built p5js here are the sorces i used: this one is the template for I started with /https://github.com/liabru/matter-js/wiki/Getting-started then i used this tutorial to undersatand how to get text inside the bodies https://www.youtube.com/watch?v=s0BnHeBX0Bw
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
Composite.add(engine.world, [boxA, boxB, boxC, ground]);

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

// Fix this later
// function setup() {
// 	createCanvas(100, 100);
// 	background("black");
//   }
// here im following this youtube videohttps://www.youtube.com/watch?v=s0BnHeBX0Bw
// it show me how to link my matter js to my file
// newmatter.js!!!!!


