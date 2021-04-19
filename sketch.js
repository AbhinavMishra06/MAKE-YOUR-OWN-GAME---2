var alien, monster;
var asteroid;
var fighterPlane1, fighterPlane2, fighterPlane3;
var bullet
var health1, health2, health3, powerups, capsules;

var alien1Img, alien2, monstersImg;
var asteroid1Img, asteroid2Img, asteroid3Img, asteroid4Img;
var backgroundImg;
var healthImg;
var fighterPlane1Img, fighterPlane2Img, fighterPlane3Img;
var bulletImg

var alienGroup, monsterGroup, asteroidGroup, asteroid

function preload(){
  alien1Img = loadAnimation("images/aliens/alien_1.png", "images/aliens/alien_2.png", "images/aliens/alien_2.png",
            "images/aliens/alien_4.png"); 
  alien2Img = loadAnimation("images/aliens/alien_5.png", "images/aliens/alien_6.png", "images/aliens/alien_7.png",
            "images/aliens/alien_8.png"); 

  monstersImg = loadAnimation("images/monster/monster_1.png", "images/monster/monster_2.png",
                "images/monster/monster_3.png", "images/monster/monster_4.png");

  asteroid1Img = loadImage("images/asteroids/asteroid_1.png");
  asteroid2Img = loadImage("images/asteroids/asteroid_2.png");
  asteroid3Img = loadImage("images/asteroids/asteroid_3.png");
  asteroid4Img = loadImage("images/asteroids/asteroid_4.png");

  
  backgroundImg = loadImage("images/images/Safety_Security_pillars.jpg");

  healthImg = loadImage("images/images/life.png");

  bulletImg = loadImage("images/images/bullet.png");
  
  fighterPlane1Img = loadImage("images/air craft/1sy.png");
  fighterPlane2Img = loadImage("images/air craft/2sy.png");
  fighterPlane3Img = loadImage("images/air craft/3sy.png");
}

function setup() {
  createCanvas(1366, 657);

  fighterPlane1 = createSprite(300, 200, 20, 20);
  fighterPlane1.addImage(fighterPlane1Img);
  fighterPlane2 = createSprite(300, 300, 20, 20);
  fighterPlane2.addImage(fighterPlane2Img);
  fighterPlane3 = createSprite(300, 400, 20, 20);
  fighterPlane3.addImage(fighterPlane3Img);

  bullet = createSprite(400, 300, 20, 20);
  bullet.addImage(bulletImg);
  bullet.scale = 0.0625;

  health1 = createSprite(100, 25 , 10, 10);
  health1.addImage(healthImg);
  health1.scale = 0.5;
  health2 = createSprite(140, 25, 10, 10);
  health2.addImage(healthImg);
  health2.scale = 0.5;
  health3 = createSprite(180, 25, 10, 10);
  health3.addImage(healthImg);
  health3.scale = 0.5;
  
  alienGroup= new Group();
  monsterGroup = new Group();
  asteroidGroup = new Group();
}

function draw() {
  background(backgroundImg); 

  spawnAliens();
  spawnMonsters();
  spawnAsteroids();
  
  
  drawSprites();
}

function spawnAliens() {

  if (frameCount % 60 === 0) {
    alien= createSprite(1366,120,40,10);
    alien.y = Math.round(random(80,200));
    alien.velocityX = -3;

    var rand = Math.round(random(1, 2));
    switch(rand) {
      case 1: alien.addAnimation("alien", alien1Img);
              break;
      case 2: alien.addAnimation("alien", alien2Img);
              break;
      default: break;
    }

    alien.scale = 0.5;
    alien.lifetime = 460;
    alienGroup.add(alien);
  }
}

function spawnMonsters() {

  if (frameCount % 60 === 0) {
    monster = createSprite(1366,120,40,10);
    monster.y = Math.round(random(360,200));
    monster.addAnimation("monster", monstersImg);
    monster.scale = 0.5;

    monster.velocityX = -3;

    monster.lifetime = 460;
    monsterGroup.add(monster);
  }
}

function spawnAsteroids() {

  if (frameCount % 60 === 0) {
    asteroid = createSprite(1366,120,40,10);
    asteroid.y = Math.round(random(400,500));
    
    asteroid.velocityX = -3;

    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: asteroid.addImage(asteroid1Img);
              break;
      case 2: asteroid.addImage(asteroid2Img);
              break;
      case 3: asteroid.addImage(asteroid3Img);
              break;
      case 4: asteroid.addImage(asteroid4Img);
              break;
      default: break;
    }

    asteroid.lifetime = 460
    asteroid.scale = 0.25;
    asteroidGroup.add(asteroid);
  }
}
