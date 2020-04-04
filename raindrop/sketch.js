const Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;

var engine, world;
var raindrop1, raindrop2;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
  raindrop1 = new Rain(400,400,10,10);
  raindrop2 = new Rain(450,550,10,10);
}

function draw() {
  background(0);  
  raindrop1.display();
  raindrop2.display();
  drawSprites();
}