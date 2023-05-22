const {Shapes, Triangle, Circle, Square} = require('./shapes.js')


    describe('Triangle' , () => {
        it('Triangle render method should return the correct svg string', () => {
            const shapecolor = 'white'
            const shape = new Triangle();
            expect(shape.render(shapecolor)).toEqual('<polygon points="145, 8 254, 182 40, 182" fill="white" />');
        })
    })

    describe('Circle' , () => {
        it('Circle render method should return the correct svg string', () => {
            const shapecolor = 'white'
            const shape = new Circle();
            expect(shape.render(shapecolor)).toEqual('<circle cx="150" cy="110" r="80" fill="white" />');
        })
    })

    describe('Square' , () => {
        it('Square render method should return the correct svg string', () => {
            const shapecolor = 'white'
            const shape = new Square();
            expect(shape.render(shapecolor)).toEqual('<rect x="80" y="40" width="130" height="130" fill="white" />');
        })
    })

    describe('Shapes' , () => {
        it('Shapes render method should return the correct svg string', () => {
            const text = 'SVG';
            const textcolor = 'black'
            const shape = 'Square'
            const shapecolor = 'white'
            const decidedshape = '<rect x="80" y="40" width="130" height="130" fill="white" />'
            const shapeobj = new Shapes(text,textcolor,shape,shapecolor);
            expect(shapeobj.render()).toEqual(`<svg version="1.1"
                width="300" height="200"
                xmlns="http://www.w3.org/2000/svg">
                ${decidedshape}
                <text x="146" y="125" font-size="60" text-anchor="middle" fill="${textcolor}">${text}</text>
                </svg>`);
        })
    })
