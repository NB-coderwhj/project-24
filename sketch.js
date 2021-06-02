
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
	dustbin = new Basket(600,330);

	Engine.run(engine);
  
}
function draw(){
	Engine.update(engine);
	background(0,0,0);
	//	keyPressed();

	paper1.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:80, y:-50});
		//console.log("Key Pressed");
	}
}




