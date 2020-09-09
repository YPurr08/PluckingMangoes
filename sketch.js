const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
let locked = false;

//Name variables for each body
var tree;
var ground;
var stone;
var boy;
var mango1, mango2, mango3, mango4, mango5, mango6;
var connector;

var MangoPositionX;
var MangoPositionY;
var StonePositionX;
var StonePositionY;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);

	//Create ground
	ground = new Ground(400,680,800, 80);

	//Create tree
	tree = new Tree(380,270, 400,400);

	//Create stone
	stone = new Stone(100,595,30,30);

	//Crete boy
	boy = new Boy(100,600,100,100);

	//Create Mango
	mango1 = new Mango(430, 390, 30, 39);
	mango2 = new Mango(490, 330, 30, 39);
	mango3 = new Mango(530, 400, 30, 39);
	mango4 = new Mango(610, 400, 30, 39);
	mango5 = new Mango(670, 370, 30, 39);
	mango6 = new Mango(590, 300, 30, 39);

	//Create Constraint
	connector = new Connector(stone.body,boy.body);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(rgb(0,75,100));

  //Display Ground
  ground.display();

  //Display tree
  tree.display();

  //Display Stone
  stone.display();

  //Display Boy
  boy.display();

  //Display Mangoes
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  //Display Constraint
  connector.display();

  //Call detectCollision
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  detectCollision(mango5,stone);

  drawSprites();
}

function keyPressed() {
	console.warn(key);
	if (keyDown("UP")) 
	{
	  console.warn("hi")
	  background(0);
	}
	else if (keyCode === 32)
	{
		console.log("space pressed")
		connector.attach(stone.body);
		Matter.Body.setPosition(stone.body, {x: 100 , y: 595});

	}
  }



function mouseDragged(){
	//background(0);
	
	if ((mouseX > 20 && mouseX < 100) && (mouseY > 550 && mouseY < 700) )
	{
		locked = true;
		Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
		//stone.display();

		noLoop();

	}
	else
	{
		locked = false;
		//console.log("fasfjlsdafjlsfjlsdjlfs")
	}
	console.log("mousex:"+ mouseX);
	console.log("mousey:"+ mouseY);
	
	console.log(locked);


	return false;
}


function mouseReleased(){
	//background(0);
	if (locked)
	{
		//Matter.Body.setStatic(stone.body, false);
		console.log("fly now");
		connector.fly();
		loop();
	}
	//return false;
}

function detectCollision(Mango, Stone){
	MangoPositionX = Mango.body.position.x;
	MangoPositionY = Mango.body.position.y;
	StonePositionX = Stone.body.position.x
	StonePositionY = Stone.body.position.y;

	var distance = dist(StonePositionX, StonePositionY, MangoPositionX, MangoPositionY);
	
	if(distance <= 0){
		Matter.Body.setStatic(mango1.body, false);
	}	
}

