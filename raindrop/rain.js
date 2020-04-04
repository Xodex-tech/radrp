class Rain {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.3,
            'friction': 0.8,
            'density':1.0
        }
       this.body = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
       this.image = loadImage(waterdrop.jpg);

    }
 display() {
     pos = this.body.position;
     angle = this.body.angle;
     push();
     imageMode(CENTER);
     image(this.image,0,0,this.width, this.height);
     translate(this.body.position.x, this.body.position.y);
     rotate(angle);
     pop();
 }
}