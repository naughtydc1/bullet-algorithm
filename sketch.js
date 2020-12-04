var bullet,wall,speed,weight;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 20);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  wall = createSprite(1400,200,thickness,height/2);
  wall.shapeColor = "brown";
}

function draw() {
  background(0); 
  if(wall.x - bullet.x <wall.width/2 + bullet.width/2){
  bullet.x = (1410-thickness);
  bullet.velocityX = 0;
  damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
   wall.shapeColor = "red";
  }
  /*if(damage<15 && damage>10){
   wall.shapeColor = "yellow";

  }*/
 if(damage<10){
 wall.shapeColor = "green";

 }

  }
  
  drawSprites();
}