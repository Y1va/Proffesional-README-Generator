// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  } else {
    return "";
  };
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `\n* [License](#license)\n`;
  } else {
    return "";
  };
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    
    This project is licensed under the ${license} License`
  } else {
    return "";
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install the dependencies run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  To run tests, use the following command:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  If you have any questions, feel free to reach out to me at ${data.email}. Find my other projects at [${data.github}](https://github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
