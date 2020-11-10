var movingRect, fixedRect;
var rect1, result1;
var rect2, rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 200, 100, 100);
  fixedRect.shapeColor = "blue";
  fixedRect.debug = true;

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.shapeColor = "blue";
  movingRect.debug = true;

  rect1 = createSprite(200, 300, 70,70);
  rect1.shapeColor = "blue";
  rect1.debug = true;

  rect2 = createSprite(100, 600, 70, 70);
  rect2.shapeColor = "blue";
  rect2.debug = true;

  rect3 = createSprite(1000, 600, 80, 80);
  rect3.shapeColor = "blue";
  rect3.debug = true;

  
  rect2.velocityX = 6;
  rect3.velocityX = -6;

}

function draw() {
  background(0);

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  //console.log(movingRect.x - fixedRect.x);
  
  result1 = isTouching(movingRect, fixedRect);
  console.log(result1);

  if(result1 == true){
    fixedRect.shapeColor = "green";
  }else{
    fixedRect.shapeColor = "blue";
  }


  bounceOff(rect2, rect3);

  drawSprites();
}

