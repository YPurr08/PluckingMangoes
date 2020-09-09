/*
Makes stones which hits the mangoes1
*/
class Stone{

    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            'restitution':0.1,
            'friction':1,
            'density':1,
            'frictionAir':0.05
        }
        //Create variables for different parameters
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height= height;
        this.width = width;
        
        //Add stone image
        this.image = loadImage("stone.png");

        //Add to world
        World.add(engine.world, this.body);
    }

    display(){
        rectMode(CENTER);

        //Display stone as image with given values in sketch.js
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        //this.image.position = this.body.position
        //console.log("Body Position:");
        //console.log(this.body.position);
    }
}