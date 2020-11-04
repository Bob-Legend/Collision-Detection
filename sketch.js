var movingRect, fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,200,100);
  movingRect.shapeColor = "red";
  fixedRect = createSprite(300,300,100,100);
  fixedRect.shapeColor = "blue";
}

function draw() {
  background(0);
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "blue";
  }
  drawSprites();
}