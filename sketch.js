// ADDED IN SETUP
// module aliases - name space called matter.something to make it different from you're normal code
// frome - https://github.com/liabru/matter-js/wiki/Getting-started
let Engine = Matter.Engine;
let World = Matter.World;
let Bodies = Matter.Bodies;
let Body = Matter.Body;

let engine;
let world;



// varbles for boxes
// storing the data
let boxes = [];
// setting the paramaters of where the ground is
let ground;
// create all of the letters
let wordsToDisplay = ["D", "Y", "S", "L", "E", "X", "I", "A"];

function setup() {
	// make the canvas the width and height 
	// make half of the container the gheight
  createCanvas(windowWidth, windowHeight/1.5);


//   This is the physicis engine 
// add it to the world ( place it in)
  engine = Engine.create();
  world = engine.world;

  // This is the ground we are creating the peramaters for the ground
//   is static: true means it doesnt fall
// the grround is a rectange with an x and y cordinate 
// gotta set it to static beccause it stays still
// gotta add the  it to the world
// .add adds bodies tot the world
// this is the syntax of a rectangle 
// Matter.Bodies.rectangle(x, y, width, height, [options])

ground = Bodies.rectangle(width / 2, height -20,width,40, { isStatic: true })
World.add(world, ground);

//   ground = Bodies.rectangle(width / 2, height - 20, width, 40, { isStatic: true });
//   World.add(world, ground);

  // create boxes with letters
  for (let i = 0; i < wordsToDisplay.length; i++) {
    let x = random(100, width - 100);
    let y = random(-100, -20);
    boxes.push(new Box(x, y, 80, 80, wordsToDisplay[i]));
  }
}

function draw() {
//   background("#FEFFE2");
  Engine.update(engine);

  for (let box of boxes) {
    box.show();
  }

  // draw ground
  noStroke();
//   fill(100);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 40);
}

class Box {
  constructor(x, y, w, h, letter) {
    this.body = Bodies.rectangle(x, y, w, h);
    this.w = w;
    this.h = h;
    this.letter = letter;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    stroke(0);
    strokeWeight(1);
    rect(0, 0, this.w, this.h);

    // draw letter
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(130);
    text(this.letter, 0, 0);
    pop();
  }
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