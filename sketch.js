

//ball=createSprite(221,400,30,30)
//ball.shapeColor=("blue")
//ball.velocityY=-2

function setup(){
  createCanvas(500,500);
  ball = createSprite(221,400,30,30);
  ball.shapeColor = "blue";
}

function draw() {
  background("red")
  textSize(15)
 fill("blue")
text("Aariv's first attempt at Coding",150,20)
text("Press left right up down arrow keys to move the ball",10,40)
if(keyDown("left")){
  ball.x=ball.x-1
  
}
if(keyDown("up")){
ball.y=ball.y-1

}

if(keyDown(DOWN_ARROW)){
  ball.y=ball.y+1
}

if(keyDown("right")){
  ball.x=ball.x+2 
}

edges=createEdgeSprites()
ball.bounceOff(edges)
  
  drawSprites()
}
