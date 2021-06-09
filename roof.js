class Roof {
    constructor(x,y,w,h){

var optionn ={
    isStatic: true,
    density: 1,
    friction:2
}
this.body = Bodies.rectangle(x,y,w,h,optionn);
this.width = w;
this.height = h;
World.add(world,this.body);
Matter.Body.setStatic(this.body,true);


    }
    

display(){
    var pos = this.body.position;



    rectMode(CENTER);
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);
}

}