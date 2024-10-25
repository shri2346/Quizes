var bg,bg2,form,system,code,security;
var score=0;
var authenticate , actualCode , enteredCode;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()

  
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(7);
  text("Special Hint : Write in Caps" , 0,10) 


  // Add code to display score in the middle of the screen  
  textSize(20);
  text("Score : " + score, width/2.3,30);
  

  // Add code to display the end screen

if(score === 3){
clear();
background(bg2);
textSize(30);
text("TREASURE UNLOCKED" , width/2.9 , height/2);

}


  drawSprites()
}

