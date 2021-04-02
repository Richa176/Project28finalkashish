
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload()
{
	boy = loadImage("boy.png");
	 tree = loadImage("tree.png");


}

function setup() {
	createCanvas(1400, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
      stone1=new Stone (100,100,50);

	  launcherObject=new launcher(stone1.body,{x:235,y:420});


	  Mango1 = new Mango(960,308,40); 
	  Mango2 = new Mango(970,250,50); 
	  Mango3 = new Mango(1100,150,50);
	   Mango4 = new Mango(1150,200,30);
	    Mango5 = new Mango(1200,250,40);
		Mango6 = new Mango(1250,300,30);
		 Mango7 = new Mango(1110,308,30); 
		 Mango8 = new Mango(1110,255,40);
		 Mango9 = new Mango(1050,308,50);
		 Mango10 = new Mango(1050,235,30);


	  ground=Bodies.rectangle(700,650,width,20,{isStatic:true});
	  World.add(world,ground);


	  console.log(ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  image(boy,200,340,200,300); 
  image(tree,900,100,400,500);

  rect(ground.position.x,ground.position.y,1400,20);

  drawSprites();
 
stone1.display();
Mango1.display();
 Mango2.display();
  Mango3.display();
   Mango4.display();
     Mango5.display();
	  Mango6.display();
	   Mango7.display();
	    Mango8.display();
		 Mango9.display();
		  Mango10.display();
		  launcherObject.display();
		  

		  //groundObject.display();

		  detectollision(stone1,Mango1);
		  detectollision(stone1,Mango2);
		  detectollision(stone1,Mango3);
		  detectollision(stone1,Mango4);
		  detectollision(stone1,Mango5);
		  detectollision(stone1,Mango6);
		  detectollision(stone1,Mango7);
		  detectollision(stone1,Mango8);
		  detectollision(stone1,Mango9);
		  detectollision(stone1,Mango10);


}

function mouseDragged()
{
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone1.body, {x:235, y:420}) 
	  launcherObject.attach(stone1.body);
	}
  }


  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  


