class Snow {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:false
        }
        this.r = 10;
        this.body = Bodies.circle(x, y, this.r, options);
        var rand=Math.round(random(1,2))
        var img;
        if(rand===1){
            img="snow4.webp";
        }
        else{
            img="snow5.webp";
        }
        this.image=loadImage(img);
        World.add(world, this.body);
    }
    
    
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        //ellipseMode(RADIUS);
        imageMode(CENTER);
      image(this.image,0,0,this.r,this.r);
        pop();
    }
    updateY(){     
        if(this.body.position.y > height){

            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,800)})
        }
    }
};







