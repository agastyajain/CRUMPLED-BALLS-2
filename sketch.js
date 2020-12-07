
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,img1;
var ground;
var box1,box2,box3;

function preload() {
img1=loadImage("bin.png");
}

function setup() {
  createCanvas(1250, 550);

  engine = Engine.create();
  world = engine.world;

  paper = new Paper(50, 500, 30);

  ground = new Ground(625,540,1250,20);

  box1=createSprite(900,400,20,20);
  box1.shapeColor="white";
  box1.addImage(img1);
  box1.scale=0.8;
 
  
  Engine.run(engine);

}


function draw() {
  background("grey");


  Engine.update(engine);
 

  paper.display();
  ground.display();
 



  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-3},200)
   
  }
  /*if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:3});
   
  }*/
  

  drawSprites();
}





