// ADDED IN SETUP
// module aliases - name space called matter.something to make it different from you're normal code
var Engine = Matter.Engine,

    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

// create an engine
// this is where we are adding in the engine

// the whole physiscs engine
var engine;
// world full of bodies
var world;
var box1;



function setup() {
	createCanvas(400, 400);
	engine = Engine.create();
	// from documentation Matter.Bodies.rectangle(x, y, width, height, [options])
	box1 = Bodies.rectangle(200, 100, 80, 60);
	// new engine setup
	Matter.Runner.run(engine) 
	console.log(box1);

	
	// make the engine run
	// default engine run
	// run the renderer




	
}
function draw(){
	console.log(box1);
	
	background(220);
	rect(box1.position.x,box1.position.y,80,80)
	
}























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