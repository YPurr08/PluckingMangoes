/*
Creates ground on which the tree and boy rest upon
*/
class Ground{

    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        //Create variables for parameters
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.height= height;
        this.width = width;

        //Add to world
        World.add(engine.world, this.body);
    }

    display(){
        rectMode(CENTER);

        //Change color
        fill(rgb(200,250,10));

        //Display as rectangle with given values in sketch.js
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}