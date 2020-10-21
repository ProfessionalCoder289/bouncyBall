const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var object,ball

function setup(){
createCanvas(600,600)
engine=Engine.create()
world=engine.world
var object_options={
    isStatic:true
}
object=Bodies.rectangle(300,580,600,50,object_options)
var ball_options={
    restitution:1.0
}
ball=Bodies.circle(300,30,20,ball_options)

World.add(world,object)
World.add(world,ball)

console.log(object)
}
function draw(){
    background(0,0,0)
    Engine.update(engine)
    rectMode(CENTER)
   fill("brown")
    rect(object.position.x,object.position.y,600,50)
ellipseMode(RADIUS)
fill("blue")
ellipse(ball.position.x,ball.position.y,20,20)
}