var balloon, balloonImg;
var background, backgroundImg;

function preLoad(){

  backgroundImg = loadImage("Hot Air Ballon-01.png");

}

function setup() {
  createCanvas(400,400);
  balloon = createSprite(400, 200, 200, 200);
  balloon.addImage("balloon", backgroundImg);
  
}

function draw() {
  background(255,255,255);
      drawSprites();
}