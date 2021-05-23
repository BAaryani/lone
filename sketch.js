var lone;



function setup() {
  createCanvas(800,400);
  lone = createSprite(400, 350, 20, 20);
}

function draw() {
  background("lightgreen");  
  
  if(keyDown("LEFT_ARROW")){
    lone.x = lone.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
  lone.x = lone.x+5;
}  
  if(keyDown("UP_ARROW")){
    lone.y = lone.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    lone.y = lone.y+5;
  }
  
  drawSprites();
}

function spawnCruel(){
  if (frameCount%500===0){
    var rand=Math.round(random(100,600))
  for(var i=100;i<600;i=i+30){
   var cruel= createSprite()
  }
  }
}