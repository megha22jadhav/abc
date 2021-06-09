class Chain {
    constructor(bodyA,bodyB){
var option={ 
    bodyA:bodyA,
    bodyB: bodyB,
    stiffness:0.04,
    length:10
}

this.slingshot = Constraint.create(option);
World.add(world,this.slingshot);






}

display(){
var pointA = this.sligshot.bodyA.position;
var pointB = this.sligshot.bodyB.position;
line(pointA.x,pointA.y,pointB.x,pointB.y);

}

}