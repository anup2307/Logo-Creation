class Shapes {
    constructor(text,textcolor,shape,shapecolor){
        // console.log("text",text)
        this.text = text
        this.textcolor= textcolor
        this.shape=shape
        this.shapecolor=shapecolor
    }

    render(){
        // console.log(this.shape)
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
        console.log(decidedshape)
        return `<svg version="1.1"
                    width="300" height="200"
                    xmlns="http://www.w3.org/2000/svg">
                    ${decidedshape}
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text>
                </svg>`
    }
}

class Square extends Shapes{
    render(){
        return `<rect x="10" y="10" width="100" height="100" fill=${this.shapecolor} />`
    }
}

class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill=${this.shapecolor} />`
    }
}

class Triangle extends Shapes{
    render(){
        return `<polygon points="150, 18 244, 182 56, 182" fill=${this.shapecolor} />`
    }
}
module.exports = Shapes;