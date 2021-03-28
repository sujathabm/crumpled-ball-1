class dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
        }
        this.rectBody=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.rectBody);

      
    }

    display(){
        rectMode(CENTER);
        rect(this.rectBody.position.x,this.rectBody.position.y,this.width,this.height);
        
    }
}