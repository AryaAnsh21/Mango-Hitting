class rock  {
    constructor(x,y){
     (x,y,50,50);
      this.image = loadImage("sprites/stone.png");
    }
    
    display() {
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      this.image.display();
    }
  }
  
  
  