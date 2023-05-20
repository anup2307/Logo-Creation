class Shapes {
    constructor(text,textcolor,shape,shapecolor){
        console.log("shapes",text,textcolor,shape,shapecolor)
        this.text = text
        this.textcolor= textcolor
        this.shape=shape
        this.shapecolor=shapecolor
    }

    render(){
        console.log("shape ",this.shape)
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
        console.log("decidedshape",decidedshape)
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
        return `<rect x="10" y="10" width="100" height="100" fill=${shapecolor} />`
    }
}

class Circle extends Shapes{
    render(shapecolor){
        return `<circle cx="150" cy="100" r="80" fill=${shapecolor} />`
    }
}

class Triangle extends Shapes{
    render(shapecolor){
        return `<polygon points="150, 18 244, 182 56, 182" fill=${shapecolor} />`
    }
}
module.exports = Shapes;