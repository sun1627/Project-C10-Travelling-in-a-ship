var ship, ship1;
var sea, sea1;

function preload(){
ship1=loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png")
 sea1=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  
  sea = createSprite(600,500);
  sea.addAnimation("running", sea1)
  sea.scale=0.5;
   sea.velocityX=-1;
  

  ship = createSprite(50,200, 50, 20);
  ship.addAnimation("running", sea1)
  edges = createEdgeSprites();

  ship.scale=0.25
  ship.x = 90;
  ship.y = 300;
}

function draw() {
  background("blue");
  if(keyDown("enter")){
 ship.velocityX = 5;
 }
  if(keyDown("left")){
 ship.velocityX = -5;
 }
  if(keyDown("space")){
 ship.velocityX = 0;
 }
  if(sea.x < 0){
    sea.x = sea.width/2;
  }
  ship.collide(edges[3])
 drawSprites();
}