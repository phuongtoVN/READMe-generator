// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    // Add code to return the license badge based on the license value
    // You can use an external service or provide the badge URL directly
    return `![${license.name}](${license.value}/badge.svg)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    // Add code to return the license link based on the license value
    // You can provide the license URL directly or use a conditional statement to map the license value to a specific URL
    return `For more information, please visit the [${license.name}](${license.value})`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    // Add code to return the license section of the README based on the license value
    // You can provide a brief description of the license or include the full license text
    return `## License

This project is licensed under the ${renderLicenseBadge(license)} license. ${renderLicenseLink(license)}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.License)}

## Description
${data.Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.License) ? `- [License](#license)` : ''}
- [Questions](#questions)

## Installation
${data.Installation}

## Usage
${data.Usage}

${renderLicenseSection(data.License)}

## Questions
For additional questions, please reach out to [@${data["GitHub-profile"]}](https://github.com/${data["GitHub-profile"]})`;
}

module.exports ={ generateMarkdown };

