class Connector{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
        }
        this.body1 = body1;
        this.body2 = body2;

        this.ropeC = Constraint.create(options);

        //Add to world
        World.add(world, this.ropeC);
        }

    fly(){
        this.ropeC.bodyA = null;
    }

    attach(body1){
        this.ropeC.bodyA = body1;
    }

        display(){
        //Define Bodies that are to be connected
        /*var pointA = this.ropeC.bodyA.position;
        var pointB = this.ropeC.bodyB.position;

        strokeWeight(2);

        //Set X & Y coordinate variables for each body
        var anchor1X = pointA.x;
        var anchor1Y = pointA.y;
        var anchor2X = pointB.x
        var anchor2Y = pointB.y;

        stroke("white");*/
        }
    }