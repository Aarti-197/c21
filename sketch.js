var fixedRect, movingRect;
var car, wall;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(100, 200, 50, 50);
  car.shapeColor = "red";
  car.velocityX=4;
  
  wall = createSprite(600,200,20,100);
  wall.shapeColor = "grey";
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(car,wall)){
    car.shapeColor = "white";
    wall.shapeColor = "white";
  }
  else{
    car.shapeColor = "red";
    wall.shapeColor = "grey";
  }
  bounceOff(car,wall);
  drawSprites();
}

function isTouching(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
    return true;
  }
  else {
    return false;
  }
}

function bounceOff(obj1,obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
    car.velocityX = -1 * car.velocityX;
  }
  else if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
      car.velocityY = -1 * car.velocityY;
  }
}