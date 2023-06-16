const fs = require("fs");
const inquirer = require("inquirer");
const { generateMarkdown } = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    message: "What is your project title?",
    type: "input"
  },
  {
    name: "Description",
    message: "Provide a short description explaining the what, why, and how of your project.",
    type: "input"
  },
  {
    name: "Installation",
    message: "What are the steps required to install your project?",
    type: "input"
  },
  {
    name: "Usage",
    message: "Provide instructions and examples for use.",
    type: "input"
  },
  {
    name: "License",
    message: "Select a license",
    type: "list",
    choices: [
      { name: "MIT", 
        value: "https://opensource.org/licenses/MIT", 
      },
      { name: "Apeche 2.0", 
        value: "https://opensource.org/licenses/Apache-2.0", 
      },
      { name: "GPLv3", 
        value: "https://www.gnu.org/licenses/gpl-3.0", 
      }, 
      { name: "BSD 3-Clause", 
        value: "https://opensource.org/licenses/BSD-3-Clause", 
      }, 
      { name: "CC BY 4.0", 
        value: "https://creativecommons.org/licenses/by/4.0/",
      }
    ]
  },
  {
    name: "GitHub-profile",
    message: "What is your Github username?",
    type: "input"
  },
  {
    name: "Email",
    message: "How to reach you with additional questions?",
    type: "input"
  }
];

// TODO: Create a function to write README file
async function writeToFileAsync(fileName, data) {
  try {
    const license = data.License;
    data.License = {
      name: license,
      value: getLicenseValue(license),
    };
    await fs.promises.writeFile(fileName, generateMarkdown(data));
    console.log("README.md has been generated successfully!");
  } catch (err) {
    console.error(err);
  }
}

function getLicenseValue(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "Apache 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "GPLv3":
      return "https://www.gnu.org/licenses/gpl-3.0";
    case "BSD 3-Clause":
      return "https://opensource.org/licenses/BSD-3-Clause";
    case "CC BY 4.0":
      return "https://creativecommons.org/licenses/by/4.0/";
    default:
      return "";
  }
}


// TODO: Create a function to generate README content
function generateREADME(data) {
  // Generate the content for the README file based on the data object
  const content = `# ${data.title}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

## License
This project is licensed under the ${data.License} license.

## Questions
For additional questions, please reach out to [@${data["GitHub-profile"]}](https://github.com/${data["GitHub-profile"]})`;

  return content;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const fileName = "README.md";
    writeToFileAsync(fileName, response);
  });
}

// Function call to initialize app
init();
 