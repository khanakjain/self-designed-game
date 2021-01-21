var bg
function preload()
{
  backgroundImage=loadImage(" background.png")
}
function setup(){
  var canvas=createCanvas(displayWidth-50,displayHeight-50);
 
  bg= createSprite(350,350,displayWidth,displayHeight)
  bg.addImage(backgroundImage)
  bg.velocityX=-2
  bg.scale=2.7
}
function draw()
{
  background("black" );
  rectMode(CENTER);
  if(bg.x<70)
  {
    bg.x=bg.width/2
  }
  drawSprites();
}
