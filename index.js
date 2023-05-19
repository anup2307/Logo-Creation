const inquirer = require('inquirer');
const fs= require('fs');
const Shapes = require('./lib/shapes.js');
const filename = './examples/logo.svg';

inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Please enter the text for the Logo (Not More than 3 characters): '
    },
    {
        type: 'input',
        name: 'textcolor',
        message: 'Please enter the text color: '
    },    
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a Shape from the list: ',
        choices: [
            "Triangle",
            "Circle",
            "Square"
        ]
    },
    {
        type: 'input',
        name: 'shapecolor',
        message: 'Please enter a color for the shape: '
    }
])
.then((answers) => {
    console.log(answers);
    const svgdata= new Shapes(answers);
    const data = svgdata.render();
    fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Successfully created SVG file!'));
});