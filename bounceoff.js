var fr,mr,edges;
function setup(){
createCanvas(1600,900)
    fr=createSprite(400,300,50,80)
    fr.shapeColor="maroon"
    fr.debug=true
    fr.velocityX=5
    mr=createSprite(800,300,80,50)
    mr.shapeColor="blue"
    mr.debug=true  
     mr.velocityX=-5
     tr=createSprite(600,50,50,80)
     tr.shapeColor="red"
     tr.debug=true
     tr.velocityY=5
     br=createSprite(600,500,50,80)
     br.shapeColor="aqua"
     br.debug=true
     br.velocityY=-5

}
function draw(){

background(255,255,0)
bounceOff(mr,fr);
bounceOff(tr,br)
drawSprites();


}
function bounceOff(o1,o2){

if(o1.x-o2.x<o2.width/2+o1.width/2 && o2.x-o1.x<o2.width/2+o1.width/2){
o1.velocityX=0-o1.velocityX
o2.velocityX=0-o2.velocityX

}
if(o1.y-o2.y<o2.y/2+o1.height/2 && o2.y-o1.y<o2.height/2+o1.height/2){
    o1.velocityY=0-o1.velocityY
    o2.velocityY=0-o2.velocityY
}    
}