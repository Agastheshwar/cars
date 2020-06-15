class cars {
    constructor(x,y,width,height){
        var options = {
            isStatic : true,
            restitution:1.0,
            friction:2.0,
            density:2.0,

        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        this.body.velocity.y = 5;


        World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
      //this.body.velocity.y = 5;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green")
      fill(255);
      rect(0,0,this.width ,this.height);
      pop();
    }
        
     
    };

