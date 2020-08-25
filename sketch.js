
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ball, ground;
var box1,box2,box3;

/*function preload()
{
	
}*/

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(100,320,70);
	ground = new Ground(600,height,1200,20);

	box1 = new Box(790,330,20,100);
	box2 = new Box(1010,330,20,100);
	box3 = new Box(900,370,200,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();
  ball.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:950,y:-950});

	}
}


