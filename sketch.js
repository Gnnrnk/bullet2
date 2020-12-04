var bullet,wall,thickness,bullet1,wall1;
var speed,weight;



function setup() {
  createCanvas(1600,400);

  thickness  = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  wall = createSprite(1200,200,thickness,height/2);
  wall1 = createSprite(1200,400,thickness,height/2);
  

  bullet = createSprite(50,200,60,20);
  bullet.shapeColor="black";
  bullet.velocityX = speed;

  bullet1 = createSprite(50,400,60,20);
  bullet.shapeColor = "black";
  bullet1.velocityX = speed;

 
}

function draw() {
  background("white");

if(hascollided(bullet,wall,bullet1,wall1)){
  bullet.velocityX = 0;
  bullet1.velocityX = 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

if (damage>10){
  wall.shapeColor = color(255,0,0);
}
if(damage<10){
  wall1.shapeColor = color(0,255,0);
}
 }   
hascollided(bullet,wall,bullet1,wall1);
  drawSprites();
}
function hascollided(bullet,wall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false
}


