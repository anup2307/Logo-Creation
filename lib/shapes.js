class Shapes {
    constructor(text,textcolor,shape,shapecolor){
        this.text = text
        this.textcolor= textcolor
        this.shape=shape
        this.shapecolor=shapecolor
    }

    render(){
        let decidedshape ="";
        switch(this.shape){
            case "Triangle":
                decidedshape = new Triangle().render(this.shapecolor);
                break;
            case "Circle":
                decidedshape = new Circle().render(this.shapecolor);
                break;   
            case "Square":
                decidedshape = new Square().render(this.shapecolor);
                break;  
            default:
                decidedshape = new Circle().render(this.shapecolor);         
        }
        
        return `<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                ${decidedshape}
                <text x="146" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text>
                </svg>`
    }
}

class Square extends Shapes{
    render(shapecolor){
        return `<rect x="80" y="40" width="130" height="130" fill=${shapecolor} />`
    }
}

class Circle extends Shapes{
    render(shapecolor){
        return `<circle cx="150" cy="110" r="80" fill=${shapecolor} />`
    }
}

class Triangle extends Shapes{
    render(shapecolor){
        return `<polygon points="145, 8 254, 182 40, 182" fill=${shapecolor} />`
    }
}
module.exports = {Shapes, Triangle, Circle, Square};