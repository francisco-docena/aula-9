var quad;
function setup() {
  createCanvas(400,400);
  quad=createSprite(200,200,20,30)
}
function draw() 
{
  background(30);
  if (keyDown("down")) {
  quad.y=quad.y+2
  }
  if (keyDown("up")) {
    quad.y=quad.y-2
    }
    
  drawSprites();
}




