
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, Ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
   monkey = createSprite(100, 350, 10, 10);
monkey.addAnimation("monkey",monkey_running);
monkey.scale = 0.2;
 Ground = createSprite(200, 375);
Ground.velocityX = -2;
Ground.height = 20;
Ground.width = 800;
 score = 0;

  
}


function draw() {

  
 background("Green");
  fill("black");
  text("Score"+score, 285, 15);
  score = score+Math.round(frameCount/60)
  if (Ground.x  < 0) {
    Ground.x = 200;
  }
  bananas();
  obstacles();
  monkey.collide(Ground);
  drawSprites();
}
function bananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(400, 
    Math.round(random(120,200)), 10, 10);
    banana.addImage(bananaImage);
    banana.velocityX = -2;
    banana.scale = 0.08;
  }
}
function obstacles() {
  if (frameCount % 300 === 0) {
   obstacle = createSprite(400, 350, 10, 10);
  obstacle.addImage(  obstaceImage );
  obstacle.velocityX = -2;
  obstacle.scale = 0.2;
}
}







