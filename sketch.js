var cat,catimg1,catimg2;
var garden,gardenimg;
var mouse,mouseimg1,mouseimg2;

function preload() {
    
gardenimg=loadImage("images/garden.png");
catimg1=loadImage("images/cat1.png"); //simply sitting
catimg2=loadImage("images/cat2.png"); //watering of mouth
catimg3=loadImage("images/cat3.png"); //watering of mouth
catimg4=loadImage("images/cat4.png"); //stand still
mouseimg1=loadImage("images/mouse1.png");//showing cheese
mouseimg2=loadImage("images/mouse2.png");//smiling
mouseimg3=loadImage("images/mouse3.png");//showing tongue
mouseimg4=loadImage("images/mouse4.png");//finding image

}

function setup(){
createCanvas(1500,800);
garden=createSprite(200,200);
garden.addImage(gardenimg);

cat=createSprite(550,450);
cat.addImage(catimg1);
cat.scale=0.13;

mouse=createSprite(200,470);
mouse.addImage(mouseimg1);
mouse.scale=0.1;
}

function draw() {

    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2 ){
        cat.velocity=0;
        cat.addAnimation("images/cat2.png",catimg2);
        cat.x=300;
        cat.scale=0.15;
        cat.changeAnimation("images/cat2.png");
        mouse.addAnimation("images/mouse3.png",mouseimg3);
        mouse.scale=0.1;
        mouse.changeAnimation("images/mouse3.png");
    }
     
    drawSprites();
}


function keyPressed(){

 if(keyCode=== LEFT_ARROW){
 cat.velocityX=-5;
 cat.addAnimation("images/cat2.png",catimg2);
 cat.changeAnimation("images/cat2.png");
 cat.scale=0.15;
 cat.x=500;

 mouse.addAnimation("images/mouse3.png",mouseimg3);
 mouse.frameDelay=25;
 mouse.changeAnimation("images/mouse3.png");
 mouse.scale=0.1;
 }
}