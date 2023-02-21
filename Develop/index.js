// required npm and pathways
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter your name',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description on your project',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide project usage information',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can others contribute to your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'Please provide any test instructions required',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project',
        choices: ['Apache', 'Boost', 'CC0', 'ISC', 'MIT', 'Unlicense'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Github username',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address',
    }
];

// function to initialize app and generate markdown when finished
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        fs.writeFile('./README.md', generateMarkdown(data), (err) =>
            err ? console.log(err) : console.log('Successfully created README.md in your directory')
        );
    });
};

// Function call to initialize app
init();
