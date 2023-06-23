
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var wall1
var wall2

function preload() {
}

function setup() {
  createCanvas(1500, 600);

  engine = Engine.create();
  world = engine.world;

  var ground_options = {
    isStatic: true
   


  }

  ground = new Ground(300, 580, width * 2, 10, ground_options)

 wall1 = new Ground(1000, 530, 10, 100, ground_options)
wall2 = new Ground(1130, 530, 10, 100, ground_options)

  //Create the Bodies Here.
  var ball_options = {
    restitution: 0.15,
    isStatic: false,
    density: 1.2
  }
  ball = Bodies.circle(200, 200, 20, ball_options);
  World.add(world, ball)
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  fill("yellow")
  ellipse(ball.position.x, ball.position.y, 20, 20)
  ground.display();
  wall1.display();
  wall2.display();

  drawSprites();

}
 function keyPressed() {
if (keyCode === UP_ARROW) {
  Matter.Body.applyForce(ball, {x:0, y:0}, {x:75, y:-90})


 }
 
 }
