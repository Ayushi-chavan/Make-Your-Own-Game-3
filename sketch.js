var player,playerImg
var opponent,opponentImg
var gameState=0
var playerImg1="b1.png"
var girlbutton
var boybutton
var playbutton


function preload(){
getPlayerImg()
bg=loadImage("bg.png")
opponentImg=loadImage("b2.png")
bg1=loadImage("bg1.jpg")

g1=loadImage("g1.png")
}

function setup() {
  createCanvas(1000,700);

  player = createSprite(200,320,50,50)
  player.addImage("player",playerImg)
  player.scale=1

  opponent = createSprite(600,320,50,50)
  opponent.addImage("opponent",opponentImg)

}

function draw() {
 // background(bg)
if(gameState===0){
  start()
}

if(gameState===1){
  play()
}
  //drawSprites();
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    player.y=player.y-5
  }
  if(keyCode==DOWN_ARROW){
    player.y=player.y+5
  }
  if(keyCode==LEFT_ARROW){
    player.x=player.x-5
  }
  if(keyCode==RIGHT_ARROW){
    player.x=player.x+5
  }
}

function start(){
  background("lightblue")
fill("red")
textSize(30)
  text("Rules of the Game",370,30)

  fill("maroon")
  textSize(25)
  text("*The player will move with arrow keys",300,100)

  text("*When the computer misses the cork the player will get a point & vise versa",50,150)

  text("*There are three levels and the players will get 2 chances ",150,200)

  text("*The game will also have powers ",300,250)

  text("*You will have to jump to catch the powers",250,300)


fill("green")
textSize(30)
text("Click the button to choose your character",200,380)


    girlbutton = createButton("Girl Player")
    girlbutton.position(320,500)
    girlbutton.mousePressed(function(){

      playerImg1 = "b1.png"
    })

    boybutton = createButton("Boy Player")
    boybutton.position(550,500)
    boybutton.mousePressed(function(){
      playerImg1 = "b2.png"
    })

    playbutton = createButton("Play")
    playbutton.position(450,600)
    playbutton.mousePressed(()=>{
      gameState = 1
      girlbutton.hide()
      boybutton.hide()
      playbutton.hide()
    })
}

function play(){
   background(bg)
  drawSprites()
}

function getPlayerImg(){
  playerImg=loadImage(playerImg1)
}



