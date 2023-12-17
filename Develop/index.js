const fs = require("fs");
const inquirer = require("inquirer");

function generateTemplate(data) {
  return `# ${data.title}\n\n## ${data.description}\n\n## ${data.install}\n\n## ${data.usage}\n\n## ${data.contribution}\n\n## ${data.test}`;
}

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your application",
      name: "title",
    },
    {
      type: "input",
      message: "Input a description",
      name: "description",
    },
    {
      type: "input",
      message: "Input installation instructions",
      name: "install",
    },
    {
      type: "input",
      message: "Input usage information",
      name: "usage",
    },
    {
      type: "input",
      message: "Input contribution guidelines",
      name: "contribution",
    },
    {
      type: "input",
      message: "Input test instructions",
      name: "test",
    },
  ])
  .then(function (data) {
    const template = generateTemplate(data);
    fs.writeFile("README.md", template, function (err) {
      err ? console.log("ERROR!") : console.log("sucess");
    });
    console.log(template);
  });

// TODO: Create an array of questions for user input
// const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
