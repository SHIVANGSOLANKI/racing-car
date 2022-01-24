var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var mygs;
var mypc;
var car1, car2, cars;
var car1Img, car2Img, trackImg;
var allplayers = []

function preload() {
  backgroundImage = loadImage("assets/background.png");
  car1Img = loadImage("assets/car1.png");
  car2Img = loadImage("assets/car2.png");
  trackImg = loadImage("assets/track.jpg");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.start();
  game.readgs();

}

function draw() {
  background(backgroundImage);
  if(mypc === 2)
  {
    game.updategs(1)
  }
  if(mygs === 1)
  {
    game.play()

  }
}

function windowResized() 
{
  resizeCanvas(windowWidth, windowHeight);
}
