class Plinko{
    constructor(x,y){
        var options={
            isStatic:true,
        }
        this.r=10;
        this.plinko=Bodies.circle(x,y,this.r,options);
        
        World.add(world,this.plinko);
    }
    display(){

        var pos=this.plinko.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.plinko.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}

  