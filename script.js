// Name any p5.js functions we use in `global` so Glitch can recognize them.
/* global
 *    HSB, background, color, colorMode, createCanvas, ellipse, fill, height,
 *    noStroke, random, rect,strokeWeight, text, textSize, width, triangle, second,
 *    stroke, line
 */

//let drop1x, drop1y, drop1d, drop1FallSpeed;
//let drop2x,drop2y,drop2d,drop2FallSpeed;
let drops, blades;

function setup() {
  createCanvas(500, 500);
  colorMode(HSB, 100);
  
  drops= [];
  blades= [];
  
  for(let i=0; i<50; i++){
    drops.push(new RainDrop());
  }
  

  
  for( let i=0; i<50; i++){
    blades.push(new Grass(random(50, width-50)));
  }
  
  

}

function draw() {
  background(0, 0, 95); //resetting the background want to make it look animated
  
  for( let i=0; i<drops.length; i++){
    drops[i].drip();
    drops[i].show();
  }
  
  for(let i=0; i<blades.length; i++){
    blades[i].grow();
    blades[i].display();
  }
}
class RainDrop{
  // the constructor will be called whenever you call new rainDrop
  constructor(d){
    this.x=random(width);
    this.y=random(height);
    this.d=random(7, 12);
    this.fallSpeed= random(5,10);
  }
  show(){
    noStroke();
    fill(60,80,80);
    triangle(this.x-this.d/2, this.y, this.x, this.y-30, this.x+this.d/2, this.y);
    ellipse(this.x,this.y,this.d);
    
  }
  drip(){
    this.y += this.fallSpeed;
    if (this.y >= height) {
      this.y = 0;
      this.x = random(width);
    }
}
}

class Grass {
  constructor(x) {
    this.x1 = x;
    this.y1 = height;
    this.x2 = this.x1 + 10;
    this.y2 = height;
    this.x3 = this.x1 + 5;
    this.y3 = height - 10;
    this.rate = random(0.1, 0.3);
  }

  display() {
    noStroke();
    fill('green');
    triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
  }

  grow() {
    if (this.y3 > height / 2) {
      this.y3 -= this.rate;
    }
  }
}

