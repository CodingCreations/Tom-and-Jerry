
var tom, catImg1, catImg2, catImg3, bgImg;
var jerry, mouseImg1, mouseImg2, mouseImg3;
var canvas;

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat4.png");
    catImg3 = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse4.png");
    mouseImg3 = loadAnimation("images/mouse2.png", "images/mouse3.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(200, 500);
    jerry.addAnimation("mouseHappy", mouseImg1);
    jerry.scale = 0.2;

    tom = createSprite(800, 500);
    tom.addAnimation("catHappy", catImg1);
    tom.scale = 0.2;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide  

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("catCollide", catImg2);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("catCollide");
        jerry.addAnimation("mouseCollide", mouseImg2);
        jerry.scale=0.15;
        jerry.changeAnimation("mouseCollide");
    } 
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

      if(keyCode === LEFT_ARROW){

          tom.velocityX = -5;
          tom.addAnimation("catRunning", catImg3);
          tom.changeAnimation("catRunning");
          jerry.addAnimation("mouseTeasing", mouseImg3);
          jerry.changeAnimation("mouseTeasing");

         }



  }
























































  /*

a
d
d
d
d
d
d
d
d

d
d
d
d
d
d
d
d
d
d

d
d
d
d
d
d
d
dd
d
d
d
d

dd
d
d

dd
d
d
dd
d





















  
  */