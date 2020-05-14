var moving;
var still;

function setup() {
  createCanvas(800,400);
   moving = createSprite(400, 200, 50, 50);
   still = createSprite(400, 200, 50, 100);
  
}

function draw() {
  background(255,255,255); 
  
  moving.x = mouseX
  moving.y = mouseY

  if(moving.y-still.y === moving.height/2+still.height/2||
    still.y-moving.y === moving.height/2+still.height/2){
    moving.shapeColor = "red"
    still.shapeColor = "red"
  }else{
    moving.shapeColor = "green"
    still.shapeColor = "green"
  }
drawSprites();

}