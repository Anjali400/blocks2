class string{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffeness:0.04,
            length:30
        }
        this.string=Constraint.create(options)
        World.add(world,this.string)
        this.pointB=pointB
    }
    attach(body){
        this.string.bodyA=body
    }
         fly(){
        this.string.bodyA = null;
    }
    
    display(){
        var posA=this.string.bodyA.position
       var posB=this.string.pointB.position
        strokeWeight(8);
       stroke("pink")
        line(posA.x,posA.y);
    }
}