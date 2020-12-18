const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    { 
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
    },
    { 
    type: 'input',
    name: 'Description',
    message: 'What is the description of your project?',
    },
    {
    type: 'input',
    name: 'Installation',
    message: 'What is the required Installation for your project?',
    },
    {
    type: 'input',
    name: 'usage',
    message: 'What will the client use your project for?',
    },
    {
    type: 'input',
    name: 'license',
    message: 'What kind of license are you using?',
    },
    {
    type: 'input',
    name: 'contributors',
    message: 'Who will be contributing to your project?',
    },
    {
    type: 'input',
    name: 'test',
    message: 'What are your instructions for testing your project?',
    },
    {
    type: 'input',
    name: 'Contents',
    message: 'What is in the table of contents for your project?',
    },
];

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
            console.log(data);
            const mkdwn = markdown(data);
            console.log(markdown);
            

            fs.writeFile("README.md", markdown, (err) => {
                err ? console.log(err) : console.log("Success!");
            });
        })
}

// function call to initialize program
init();


