const fs = require("fs");
const inquirer = require("inquirer");

function generateTemplate(data) {
  return `# <${data.title}>\n\n# Table of contents\n1.[Description](#description)\n2.[Installation](#Installation-Instructions)\n3.[Usage](#Usage-Information)\n4.[Contribution](#Contribution-guidelines)\n5.[Test Instructions](#test-Instructions)\n6.[Licence](#Licence)\n\n## Description\n7.[Questions](#Questions)\n\n## Description\n\n${data.description}\n\n## Installation Instructions\n\n${data.install}\n\n## Usage Information\n\n${data.usage}\n\n## Contribution guidelines\n\n${data.contribution}\n\n## Test Instructions\n\n${data.test}\n\n## Licence\n\n${data.licence}\n\n## Questions\n\nVisit my github profile: https://github.com/${data.github}/\n\nEmail me with further questions: ${data.email}`;
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
    {
      type: "list",
      message: "Select your licence",
      choices: ["li1", "li2"],
      name: "licence",
    },
    {
      type: "input",
      message: "Input your Github username",
      name: "github",
    },
    {
      type: "input",
      message: "Input your email",
      name: "email",
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
