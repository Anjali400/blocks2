const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var block17,block18,block19,block20,blck21,block22,block23;
var stand1,stand2;
var string1,ball;
var polygon_image;
var backgroundImg;
var bg="b.png"
var score=0;
function preload(){
  paolygon_image=loadImage("Polygon.png")
    getBackground()
  
}
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
    world = engine.world;

ball = Bodies.circle(50,200,20);
  World.add(world,ball)
block1=new blocks(348,235,20,25)
block2=new blocks(348,235,20,25)
block3=new blocks(347,235,20,25)
block4=new blocks(349,235,20,25)
block5=new blocks(345,235,20,25)
block6=new blocks(348,235,20,25)
block7=new blocks(340,235,20,25)

block8=new blocks(345,230,20,25)
block9=new blocks(347,230,20,25)
block10=new blocks(348,230,20,25)
block11=new blocks(348,230,20,25)
block12=new blocks(348,230,20,25)

block13=new blocks(347,225,20,25)
block14=new blocks(348,225,20,25)
block15=new blocks(348,225,20,25)
block16=new blocks(348,220,20,25)

block17=new blocks(600,190,20,25)
block18=new blocks(610,190,20,25)
block19=new blocks(620,190,20,25)
block20=new blocks(595,190,20,25)
block21=new blocks(610,180,20,25)
block22=new blocks(595,180,20,25)
block23=new blocks(609,170,20,25)

stand2=new stand(605,200,130,10)

ground=new stand(width/2,350,800,20)

stand1=new stand(355,250,190,10)
string1=new string(this.ball,{x:100,y:200})


    Engine.run(engine);
}

function draw() {
  
  if(backgroundImg)
        background(backgroundImg);
    fill("red")
    textSize(35)
    text("score"+score,width-300,50)
    imageMode(CENTER)

  image(paolygon_image ,ball.position.x,ball.position.y,40,40)
  ground.display()
  stand1.display()
   stand2.display()
block1.display()
block1.score()
block2.display()
block2.score()
block3.display()
block3.score()
block4.display()
block4.score()
block5.display()
block5.score()
block6.display()
block6.score()
block7.display()
block7.score()

block8.display()
block8.score()
block9.display()
block9.score()
block10.display()
block10.score()
block11.display()
block11.score()
block12.display()
block12.score()
block13.display()
block13.score()
block14.display()
block14.score()
block15.display()
block15.score()
block16.display()
block16.score()
block17.display()
block17.score()
block18.display()
block18.score()
block19.display()
block19.score()
  block20.display()
  block20.score()
  block21.display()
  block21.score()
  block22.display()
  block22.score()
  block23.display()
  block23.score()

  drawSprites();
}
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    string1.fly();
}
async function getBackground(){
     var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata") 
     var responseJSON= await response.json();
      console.log(responseJSON)
      var datetime=responseJSON.datetime;
      console.log(responseJSON.datetime)
      var hour=datetime.slice(11,13)
      if(hour>=06&&hour<=19){
          bg="b.png"
      }
      else{
          bg="night.jpg"
      }
      backgroundImg=loadImage(bg)
       }