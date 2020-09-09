/*
Makes mango that falls when stone is touching
*/
class Mango{

    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        //Create variables for different parameters
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height= height;
        this.width = width;
        
        //Add Mango image
        this.image = loadImage("mango.png");

        //Add to world
        World.add(engine.world, this.body);
    }

    display(){
        rectMode(CENTER);

        //Display mango as image with given values in sketch.js
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}