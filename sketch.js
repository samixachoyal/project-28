
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var mango,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var tree1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree1 = new Tree(600,600,200,200);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  tree1.display();
}



