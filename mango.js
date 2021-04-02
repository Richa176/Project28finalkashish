class Mango {
    constructor(x, y, r) {
        var options={
            isStatic:true,
            restitution:0.3,
            friction:1
        }
        this.x=x;
         this.y=y;
          this.r=r

        
      this.body = Bodies.circle(this.x, this.y,this.r, options);
      this.width = width;
      this.height = height;
      this.image=loadImage("mango.png");
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
  
      /*strokeWeight(4);
      stroke("white");
      fill("pink");
      ellipseMode(0, 0, this.width, this.height);*/
      image(this.image,0,0,this.r,this.r)
      pop();
    }
  }