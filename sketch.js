var caixa
function setup() {
  createCanvas(600,400);
  caixa=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW))
 {background ("pink")}
  if(keyDown(LEFT_ARROW))
  {background ("blue")}
  if(keyDown(UP_ARROW))
  {background ("purple")}
  if(keyDown(DOWN_ARROW))
  {background ("black")}


drawSprites();
}




