// Variable declorations

const fs = require("fs");
const inquirer = require("inquirer");

// function to retreive a badge for the user's licence

function getLicenseBadge(license) {
  const licenseBadges = {
    "MIT License": "https://img.shields.io/badge/License-MIT-yellow.svg",
    "GPL License": "https://img.shields.io/badge/License-GPLv3-blue.svg",
    "Apache License":
      "https://img.shields.io/badge/License-Apache%202.0-blue.svg",
    "BSD License":
      "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg",
    "CCO License":
      "https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg",
  };

  return `![${license}](https://img.shields.io/badge/License-${licenseBadges[license]})`;
}

// This is the templat for the readme,wich the users input will be injected into

function generateTemplate(data) {
  const licenseBadge = getLicenseBadge(data.license);

  return `# <${data.title}>\n${licenseBadge}\n\n# Table of contents\n1.[Description](#description)\n2.[Installation](#Installation-Instructions)\n3.[Usage](#Usage-Information)\n4.[Contribution](#Contribution-guidelines)\n5.[Test Instructions](#test-Instructions)\n6.[Licence](#Licence)\n7.[Questions](#Questions)\n\n## Description\n\n${data.description}\n\n## Installation Instructions\n\n${data.install}\n\n## Usage Information\n\n${data.usage}\n\n## Contribution guidelines\n\n${data.contribution}\n\n## Test Instructions\n\n${data.test}\n\n## Licence\n\nThis application is covered under the ${data.license}\n\n## Questions\n\nVisit my github profile: https://github.com/${data.github}/\n\nEmail me with further questions: ${data.email}`;
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
      message: "Select your license",
      choices: [
        "MIT License",
        "GPL License",
        "Apache License",
        "BSD License",
        "CCO License",
      ],
      name: "license",
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
