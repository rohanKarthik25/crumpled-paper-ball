const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let groundObj;
let leftSide;
let rightSide;
let ball;

function setup() {

createCanvas(1200, 800);
engine = Engine.create();
world = engine.world;

let options ={
isStatic:false,
restitution:0.3,
friction:0,
density:1.2

}

//Create the Bodies Here.

groundObj=new Ground (600,670,1200,20);
leftSide= new Ground(600,600,20,120);
rightSide= new Ground(850,600,20,120);
ball=Bodies.circle(100,600,5,options);
World.add(world,ball)

Engine.run(engine);
}
function draw() {

Engine.update(engine)
background(0);
ellipse(ball.position.x,ball.position.y,45)
groundObj.display()
leftSide.display()
rightSide.display()
drawSprites();
}
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.26,y:0.25})
}

}



