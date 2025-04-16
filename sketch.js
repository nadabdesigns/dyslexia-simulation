// THESE ARE THE STEPS
// CREATE THE BOXES 
// PUSH P5JS OVER THEM


// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
let wordsToDisplay = [
	"D",
	"Y",
	"S",
	"L",
	"E",
	"X",
	"I",
	"A",
];

// use push later

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine: engine
});

// create two boxes and a ground
var boxD = Bodies.rectangle(666, 200, 80, 80);
var boxY = Bodies.rectangle(555, 80, 70, 80);
var boxS = Bodies.rectangle(444, 50, 80, 80);
var boxL = Bodies.rectangle(550, 40, 80, 80);
var boxE = Bodies.rectangle(550, 30, 80, 80);
var boxX = Bodies.rectangle(550, 50, 80, 80);
var boxI = Bodies.rectangle(550, 50, 80, 80);
var boxA = Bodies.rectangle(550, 50, 80, 80);

var ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// add all of the bodies to the world
Composite.add(engine.world, [boxD, boxY,boxS,boxL,boxE,boxX,boxI,boxA, ground]);

// run the renderer
Render.run(render);

// create runner
var runner = Runner.create();

// run the engine
Runner.run(runner, engine);

// function setup() {
// 	createCanvas(windowWidth, windowHeight/2 - 60);
// 	engine = Enging.create();
// 	ground = bodies.rectangles(width / 2, height - 20, width, 10, { isStatic: true, });
// 	wallLeft = Bodies.rectangle(0,height/2,10,height,{isStatic:true});
// 	wallRight = Bodies.rectangle(width,height/2,10,height,{isStatic:true});
// 	world.add(engine.world, [ground, wallLeft, wallRight]);
// 	for (let i = 0; i < wordsToDisplay.length; i++){
// 		World.push(new World(random(width), -200, wordsToDisplay[i]));

// 	}
// }

























// OLD


// const Engine = Matter.Engine;
// const World = Matter.World
// const Bodies = matter.Bodies
// const Body = Matter.Body;

// let engine;
// let words = [];
// let ground, wallLeft, wallRight;
// let wordsToDisplay = [
// 	"D",
// 	"Y",
// 	"S",
// 	"L",
// 	"E",
// 	"X",
// 	"I",
// 	"A",
// ];
// function setup() {
// 	createCanvas(400, 400);
	
// }
// function draw(){
// 	background(51);

// }

// function setup() {
// 	createCanvas(windowWidth, windowHeight - 60);
// 	engine = Enging.create();
// 	ground = bodies.rectangles(width / 2, height - 20, width, 10, { isStatic: true, });
// 	wallLeft = Bodies.rectangle(0,height/2,10,height,{isStatic:true});
// 	wallRight = Bodies.rectangle(width,height/2,10,height,{isStatic:true});
// 	world.add(engine.world, [ground, wallLeft, wallRight]);
// 	for (let i = 0; i < wordsToDisplay.length; i++){
// 		World.push(new World(random(width), -200, wordsToDisplay[i]));

// 	}
// }
// function draw(){
// 	background("#FEFFE2");
// 	Engine.update(engine)
// 	for (let word of words){
// 		word.show();
// 	}
// }
// class Word {
// 	constructor(x,y, word){
// 		this.body = Bodies.rectangle(x,y, word.length*20,40);
// 		this.word = word;
// 		World.add(engine.world, this.body);
// 	}
// 	show(){
// 		let pos = this.body.position;
// 		let andle = this.body.angle;

// 		push();
// 		translate(pos.x, pos.y);
// 		rotate(angle);
// 		rectMode(CENTER);
// 		fill (255)

// 	}
// }





// function draw() {
// 	// numerically integrate the velocity and position
// 	velocity += gravity;
// 	y += velocity;

// 	// bounce off the bottom
// 	if (y > height) {
// 		y = height;
// 		velocity = -abs(velocity) + 18;
// 	}

// 	background("black");
// 	fill("white");
// 	noStroke();
// 	textSize(60);
// 	text("D", x, y);
// 	text("D", 2 * x, y);
// 	text("Y", 3 * x, y);
// 	text("S", 4 * x, y);
// 	text("L", 5 * x, y);
// 	text("E", 6 * x, y);
// 	text("X", 7 * x, y);
// 	text("I", 8 * x, y);
// 	text("A", 9 * x, y);
// }