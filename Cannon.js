class Cannon{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.04,
            length: 5
        }
		//this.bodyA = body;
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
		this.sling.bodyA=body;
	}
    
    fly(){
        this.sling.bodyA = null;
    }

    display(){
		if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(7);
            stroke(48,22,8);
			line(pointA.x, pointA.y, pointB.x, pointB.y);
		}
    }
    
}