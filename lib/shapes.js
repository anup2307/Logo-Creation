const Square = require('./square');
const Circle = require('./circle');
const Triangle = require ('./triangle');

class Shapes {
    constructor({text,textcolor,shape,shapecolor}){
        this.text = text
        this.textcolor= textcolor
        this.shape=shape
        this.shapecolor=shapecolor
    }
    render(){
        let decidedshape ="";
        switch(this.shape){
            case "Triangle":
                decidedshape = new Triangle().render();
                return decidedshape;
            case "Circle":
                decidedshape = new Circle().render();
                return decidedshape;    
            case "Square":
                decidedshape = new Square().render();
                return decidedshape;   
            default:
                decidedshape = new Circle().render();         
        }

        return `<svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    ${decidedshape}
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text>
                </svg>`
    }
}
module.exports = Shapes