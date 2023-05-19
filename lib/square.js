const Shapes = require("./shapes");

class Square extends Shapes{
    render(){
        return `<rect x="10" y="10" width="100" height="100" fill=${this.shapecolor} />`
    }
}

module.exports = Square;