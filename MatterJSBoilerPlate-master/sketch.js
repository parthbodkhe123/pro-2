
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy,boyimage;
var tree,treeimage;
var stone,stoneimage;
var mango,mangoimage;
var ground;
var slingshot;
var gamestate ="onsling"
function preload()
{
	boyimage = loadImage("Plucking mangoes/boy.png")
	treeimage = loadImage("Plucking mangoes/tree.png")
	stoneimage=loadImage("plucking mangoes/stone.png")
	mangoimage =loadImage("plucking mangoes/mango.png")
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy=createSprite(400,400,30,30)
boy.addImage(boyimage)
tree= new Tree(200,200,20,20)
tree.addImage(treeimage)
stone= new Stone (200,20,40,40)
stone.addImage(stoneimage)
mango = new Mango (200,20,50,50)
ground = new Ground(400,780,20,20)
slingshot= new Slingshot(stone.body,{x:29,y:29})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 tree.display()
stone.display()
mango.display()
ground.display()
 
}

function mouseDragged(){
    if (gameState=="onsling"){
       Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(bird.body, {x: 200 , y: 50});  
        slingshot.attach(bird.body);
	}
}