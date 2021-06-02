class Basket{
    constructor(x,y){

        this.x = x;
        this.y = y;
        this.bktHt = 50;
        this.bktTh = 20;
        this.bktWdth = 100;
      //  this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.bktWdth,this.bktTh, {isStatic:true})
        World.add(world,this.bottomBody);

        this.leftBody = Bodies.rectangle(this.x - this.BktWdth/2, this.y - this.BktHt/2,
        this.bktTh,this.bktHt, {isStatic : true});
       // Matter.Body.setAngle(this.leftBody, this.angle)
        World.add(world,this.leftBody);

        this.rightBody = Bodies.rectangle(this.x + this.BktWdth/2, this.y - this.BktHt/2,
        this.bktTh,this.BktHt, {isStatic : true})
      //  Matter.Body.setAngle(this.rightBody, this.angle)
        World.add(world,this.rightBody);
    }
    display(){
        var bPos = this.bottomBody.position;
        var lPos = this.leftBody.position;
        var rPos = this.leftBody.position;


        push();
        translate(lPos.x,lPos.y);
        rectMode(CENTER);
      //  angleMode(RADIANS);
        stroke(255);
        fill(255);
      //  rotate(this.angle);
       // rect(0,0,this.bktTh,this.BktHt);
       rect(520,290 ,20,100)
        pop();

        push();
        translate(rPos.x,rPos.y);
        rectMode(CENTER);
      //  angleMode(RADIANS);
        stroke(255);
        fill(255);
      //  rotate(-1*this.angle);
       // rect(0,0,this.bktTh,this.BktHt);
       rect(680, 290,20,100)
        pop();

        push();
        translate(bPos.x,bPos.y);
        rectMode(CENTER);
      //  angleMode(RADIANS);
        stroke(255);
        fill(255);
       // rotate(this.angle);
       // rect(0,0,this.bktWdth,this.BktTh);
        rect(0,0,150,20)
        pop();



    }
}