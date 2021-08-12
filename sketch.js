const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var tower
var ground
var canon

function preload(){
    backgroundImg = loadImage("./assets/background.gif")
    }



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    tower = new Tower(150,350,160,310)

    ground = new Ground(0,height-1,width*2,1)
   
    angle = -PI/4
    canon = new Canon(180,110,100,50,angle)

    
}



function draw(){
    background(0);
    image(backgroundImg,0,0,width,height)

    Engine.update(engine);

    tower.display()
   canon.display()
   ground.display()
}
