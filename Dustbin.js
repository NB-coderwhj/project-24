class Dustbin{
    constructor(x, y, width, height){
        var options = {
            'isStatic' : true
        }
       // this.leftWall = Bodies.rectangle(x,y,20,50,options);
       // this.rightWall = Bodies.rectangle(x,y,20,50,options);
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       // this.base = Bodies.rectangle(x,y,120,20,options);
    }
    display(){
       var pos = this.body.position;
      // var angle = this.body.angle;
       
        fill("white")
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
        
    }
}