// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of the repo?"
    },
    {
        type: "input",
        name: "description",
        message: "Short description of the project"
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install this project?"
    },
    {
        type: "input",
        name: "usage",
        message: "How to use this application?"
    },
    {
        type: "input",
        name: "credits",
        message: "Do you have any collaborator?"
    },
    {
        type: "input",
        name: "experiences",
        message: "What are the challenges you've had?"
    },
    {
        type: "list",
        name: "license",
        message: "What license is used in the repo?",
        choices: ["MIT", "GPL", "None"]
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userPrompts)=>{
        writeToFile("Output/readme.md", generateMarkdown(userPrompts))
        
    })
}

// Function call to initialize app
init();
