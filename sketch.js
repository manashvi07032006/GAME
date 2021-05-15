const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var shipsGroup, crow;
var cannon, platform;
var bomb, holder;
var ship_enemy, ship_player;
var player, enemy, player_ani, enemy_ani;

function preload(){
   bombImg = loadImage("bom.png");

   player = loadImage("player1.png");
   player_ani = loadAnimation("player1.png", "player2.png", "player3.png", "player4.png", "player5.png", "player6.png");
   
   enemy = loadImage("enemy1.png");
   enemy_ani = loadAnimation("enemy1.png", "enemy2.png", "enemy3.png", "enemy4.png", "enemy5.png", "enemy6.png");
}

function setup(){
  var canvas = createCanvas(displayWidth, displayHeight);
  var engine = Engine.create();
  world = engine.world;

  platform = new Ground(displayWidth/2, displayHeight/2 + 170, displayWidth, 20);

  ship_enemy = createSprite(displayWidth/2 - 500, displayHeight/2 + 140, 50, 50);
  ship_player = createSprite(displayWidth/2 + 500, displayHeight/2 + 140, 50, 50);

  cannon1 = createSprite(displayWidth/2 - 500, displayHeight/2 + 140, 50, 50);
  cannon1.addAnimation("plr", player);
  cannon1.addAnimation("explode", player_ani);
  cannon2 = createSprite(displayWidth/2 + 500, displayHeight/2 + 140, 50, 50);
  cannon2.addImage("emy", enemy);

  bomb = new Bom(displayWidth/2 - 400, displayHeight/2 - 150, 20, 20);
  
  holder = new Cannon(bomb.body, {x: displayWidth/2 - 500, y: displayHeight/2 - 100});

  //shipsGroup = new Group();

}

function draw(){
    background("blue");
    bomb.display();
    holder.display();
    platform.display();
    drawSprites();
}
/*
function spawnShips(){
    if(frameCount % 120 === 0){
        var ship = createSprite(displayWidth, Math.round(random(displayHeight/2 - 25, displayHeight/2 - 25)), 50, 50);
        ship.velocityX = -3;
        ship.lifetime = 300;
        shipsGroup.add(ship);
    }
}*/

function mouseDragged(){
    Matter.Body.setPosition(bomb.body, {x : mouseX, y : mouseY})
}


function mouseReleased(){
    holder.fly();
    cannon1.changeAnimation("explode", player_ani);
    Matter.Body.applyForce(bomb.body, bomb.body.position,{x: -500, y: 500})
}
