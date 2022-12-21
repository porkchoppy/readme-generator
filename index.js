// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      message: 'Please describe your project.',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How do you install your app?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How do you use your app?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Did anyone contribute to the project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'How do you test this app?',
      name: 'tests',
    },
  ])

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
