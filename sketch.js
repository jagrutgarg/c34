const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var flag = 0;
var gameState = "onSling";

function preload() {
   bg = loadImage("images/bg.jpg");
   crashSound = loadSound("sound/train_crossing.mp3");
   trainSound = loadSound("sound/train.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,380,1200,20);
    boggie1 = new Boggie(50, 170, 50, 50);
    boggie2 = new Boggie(150, 170, 50, 50);
    boggie3 = new Boggie(250, 170, 50, 50);
    boggie4 = new Boggie(350, 170, 50, 50);
    boggie5 = new Boggie(450, 170, 50, 50);
    boggie6 = new Boggie(550, 170, 50, 50);
    chain1 = new Chain(boggie1.body, boggie2.body);
    chain2 = new Chain(boggie2.body, boggie3.body);
    chain3 = new Chain(boggie3.body, boggie4.body);
    chain4 = new Chain(boggie4.body, boggie5.body);
    chain5 = new Chain(boggie5.body, boggie6.body);
    rock1 = new Rock(1100, 170, 100, 100);
}

function draw(){
    background(bg); 
    Engine.update(engine);
    
    ground.display(); 
    boggie1.display();
    boggie2.display();
    boggie3.display();
    boggie4.display();
    boggie5.display();
    boggie6.display();
    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    rock1.display();
    var collision = Matter.SAT.collides(boggie6.body, rock1.body);
    if (collision.collided){
        flag = 1;
    }

    if (flag === 1){
        textSize(30);
        fill("green");
        text("CRASH" , 500, 50);
        crashSound.play();
    }
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW){
       Matter.Body.applyForce(boggie6.body, {x:boggie6.body.position.x, y:boggie6.body.position.y},
       {x: 0.5, y:0})
       trainSound.play();
    }
}
