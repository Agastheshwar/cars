const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var car1,car2,car3,car4,car5;
var gameState;
function setup() {
  createCanvas(1200,600);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  //car1 = new cars(200,500,70,70);
  //car2 = new cars(300,500,70,70);
  //car3 = new cars(400,500,70,70);
  //car4 = new cars(500,500,70,70);
  //car5 = new cars(600,500,70,70);

  form = new Form();
  game = new Game();
  game.start();
}

function draw() {
  background("blue");  
  Engine.update(engine);
  
  //car1.display();
  //car2.display();
  //car3.display();
  //car4.display();
  //car5.display();
  //form.display();
}