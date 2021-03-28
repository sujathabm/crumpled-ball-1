
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2,
	}

	


	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	World.add(world, ground);

paper1=new paper(200,100,35);
leftSide=new dustbin(270,600,15,100);
rightSide=new dustbin(520,600,15,100);
bottomSide=new dustbin(400,650,250,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  paper1.display();
  leftSide.display();
  rightSide.display();
  bottomSide.display();
  rect(ground.position.x,ground.position.y,width,10);
  
       
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		console.log("hello");
		Matter.Body.applyForce(paper1.paperObject,paper1.paperObject.position,{x:150,y:-150});

	}
}



