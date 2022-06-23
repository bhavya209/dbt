var tank1,tank2,tank1_img,tank2_img
var backGroundimg,background
function  preload(){
    tank1_img = loadImage("assets/Tank1.png")
    tank2_img = loadImage("assets/Tank2.png")
    backGroundimg = loadImage("assets/bg.jpg")

} 
    
function setup(){
  createCanvas(windowWidth,windowHeight)

  
    tank1 = createSprite(width - 200,height/2)
    tank1.addImage(tank1_img)
    tank1.scale = 0.25

    tank2 = createSprite(400,height/2)
    tank2.addImage(tank2_img)
    tank2.scale = 0.35
    image(backGroundimg,0,0,width,height)
}

function draw() {
 background("green")



/*if(keyIsDown("UP_ARROW")){
    tank1.y -= 10
}
if(keyIsDown("DOWN_ARROW")){
    tank1.y += 10
}


if(keyIsDown("w")){
    tank2.y -= 10
}
if(keyIsDown("s")){
    tank2.y += 10
}*/
    drawSprites()
}


function keyPressed(){
    if(keyIsDown("UP_ARROW")){
        tank1.velocityY -= 10
    }
    if(keyIsDown("DOWN_ARROW")){
        tank1.y += 10
    }
    
    
    if(keyIsDown("w")){
        tank2.y -= 10
    }
    if(keyIsDown("s")){
        tank2.y += 10
    }
}