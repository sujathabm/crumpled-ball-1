class paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
        }
        this.paperObject=Bodies.circle(x,y,radius,options);
        this.x=x;
        this.y=y;
        this.radius=radius;
        World.add(world,this.paperObject);
        this.image=loadImage("paper.png");
        
    
    }

    display(){
        ellipseMode(CENTER);
  ellipse(this.paperObject.position.x,this.paperObject.position.y,this.radius);


 imageMode(CENTER);
image(this.image,this.paperObject.position.x,this.paperObject.position.y,this.radius);
    }
}