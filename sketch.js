
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper1, ground, dustbin

function setup() {
	createCanvas(800, 400);

    engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200,320);
	ground = new Ground(width/2,height-50,width,20);
	dustbin1 = new Dustbin(550,333,200,15);
	dustbin2 = new Dustbin(459,276,15,100);
	dustbin3 = new Dustbin(643,276,15,100);

	Engine.run(engine);
  
}
function draw(){
	Engine.update(engine);
	background(0,0,0);
	//	keyPressed();

	paper1.display();
	ground.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60, y:-70});
		//console.log("Key Pressed");
	}
}




