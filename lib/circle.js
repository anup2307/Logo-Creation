const Shapes = require("./shapes");

class Circle extends Shapes{
    render(){
        return `<circle cx="150" cy="100" r="80" fill=${this.shapecolor} />`
    }
}

module.exports = Circle;