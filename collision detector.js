var fRect,mRect


function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  fRect.shapeColor="aqua"
  fRect.debug=true
  mRect=createSprite(500, 200, 50, 50);
  mRect.shapeColor="maroon"
  mRect.debug=true
}

function draw() {
  background(255,0,255);  
mRect.y=World.mouseY
mRect.x=World.mouseX
if(isTouching(mRect,fRect)){
fRect.shapeColor="green"
mRect.shapeColor="green"
}
else{
fRect.shapeColor="aqua"
      mRect.shapeColor="maroon"
}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    && object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2
    &&object2.x-object1.x<object2.width/2+object1.width/2){
  
 return true
    }
    else{
     return false 
    }


}