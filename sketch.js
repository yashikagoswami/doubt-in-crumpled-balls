
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper1, ground, Dustbin;

function setup() {
	createCanvas(600, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(100,300,100);
	ground = new Ground(300, 380, 600,10);
    Dustbin = new dustbin(200,200);
	
	Engine.run(engine);
  
}


function draw() {
  background(230);
  Engine.update(engine);

  paper1.display();
  ground.display();
  Dustbin.display();
 
}



