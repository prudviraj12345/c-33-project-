class Plinko {
        constructor(x, y, radius) {
            var options = {
                isStatic: true

            }
            this.radius = 10;
            this.body = Bodies.circle(x, y, this.radius, options);
            
            World.add(world, this.body);



          }
          display(){

           

            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            fill("white");
            rotate(angle);
            ellipseMode(RADIUS);
            ellipse(0,0,this.radius,this.radius);
            pop();
          }
    }