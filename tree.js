/*
Makes tree where the mangoes hang from
*/
class Tree{

    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        //Create variables for different parameters
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height= height;
        this.width = width;
        
        //Add tree image
        this.image = loadImage("tree.png");

        //Add to world
        World.add(engine.world, this.body);
    }

    display(){
        rectMode(CENTER);

        //Display tree as image with given values in sketch.js
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
    }
}