class Paper{
    constructor(x,y){
        var options = { 
            'density' : 1.5,
            'friction' : 0.7, 
        }
        this.body = Bodies.circle (x,y,20, options)
        this.diameter = 20 
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0, this.diameter);
        pop();
    }
}