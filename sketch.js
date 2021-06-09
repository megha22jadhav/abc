
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bb,bb1,bb2,bb3,bb4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bb1 = new Bob(200,200,40);


  
}


function draw() {
	Engine.update(engine);

  background(0);
 // bb1.display();

 
}



