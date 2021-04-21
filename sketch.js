const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground,ball;

engine=Engine.create();
  world=engine.world;
  
function setup() {
  createCanvas(1000,400);
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(200,350,1500,20,ground_options);
World.add(world,ground);

var ball_options={
  restitution:1.0
}
ball=Bodies.circle(500,100,30,ball_options);
World.add(world,ball);
console.log(ground.position.x);
console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  fill("red");
rectMode(CENTER);
rect(ground.position.x,ground.position.y,1500,20);

fill("lime");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30);
}