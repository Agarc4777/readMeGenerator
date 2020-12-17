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
    name: 'Contents',
    message: 'What is in the table of contents for your project?',
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
    name: 'contribution',
    message: 'What will the user need to know about contributing to your project?',
    },
    {
    type: 'input',
    name: 'test',
    message: 'What are your instructions for testing your project?',
    },
    {
    
    },
];

// function to write README file
function writeToFile(fileName, data) {
    this.fileName = fileName
    this.data = data
    this
}

// function to initialize program
function init() {
inquirer.prompt(questions);
}

// function call to initialize program
init();


