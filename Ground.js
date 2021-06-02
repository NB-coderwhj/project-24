class Ground {
    constructor(x,y,w,h){
        var options = {
            'isStatic' : true,
            'density' : 2
        }
    
       
        this.width =w;
        this.height = h;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}