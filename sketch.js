const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var maxDrops=100;
var drops=[]
var walking,walkingImg;
var thunderCreatedFrame=0
var thunderbolt,thunderboltImg1,thunderboltImg2,thunderboltImg3,thunderboltImg4;
function preload(){
    walkingImg=loadAnimation(
    "images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png",
    "images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png",
    "images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png",
    "images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png"
  )
  thunderboltImg1=loadImage("images/thunderbolt/1.png")
  thunderboltImg2=loadImage("images/thunderbolt/2.png")
  thunderboltImg3=loadImage("images/thunderbolt/3.png")
  thunderboltImg4=loadImage("images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400,700)
   engine = Engine.create();
   world = engine.world;
   walking=createSprite(200,500)
   walking.addAnimation("walk",walkingImg)
   walking.scale=0.5
   if(frameCount%150==0){

   
   for (var i=0;i<maxDrops;i++){
       drops.push(new Drop(random(0,400),random(0,400)))
   }
   
}
}
function draw(){
  background(0) 
  Engine.update(engine);
  //creating thunder
  rand = Math.round(random(1,4));
  if(frameCount%80===0){
      
      thunderCreatedFrame=frameCount;
      thunderbolt = createSprite(random(10,370), random(10,30), 10, 10);
      switch(rand){
          case 1: thunderbolt.addImage(thunderboltImg1);
          break;
          case 2: thunderbolt.addImage(thunderboltImg2);
          break; 
          case 3: thunderbolt.addImage(thunderboltImg3);
          break;
          case 4: thunderbolt.addImage(thunderboltImg4);
          break;
          default: break;
      }
      thunderbolt.scale = random(0.3,0.6)
  }

  if(thunderCreatedFrame + 10 ===frameCount && thunderbolt){
      thunderbolt.destroy();
  }

  drawSprites()
  for (var i=0;i<maxDrops;i++){
      drops[i].display()
      drops[i].update()

  }
  
}   

