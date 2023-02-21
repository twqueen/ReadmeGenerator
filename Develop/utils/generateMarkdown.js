// for rendering license badges with their respective link
function renderLicenseBadge(license) {
  if (license === 'Apache') {
    return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === 'Boost') {
    return `[![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  } else if (license === 'CC0') {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`
  } else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  } else if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
  }
}

// rendering license information into readme section
function renderLicenseSection(license) {
  return `
  ## License
  This project is covered under ${license}. For more information, click on the license badge at the top.`
}

// Generate markdown for README file
function generateMarkdown(data) {
  return `# ${data.project}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contributing](#contribution)
  * [Tests](#testing)
  * [Questions](#questions)
  * [Credits](#credits)
    
  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  Feel free to contact me with any questions regarding the project  
  GitHub: https://github.com/${data.github}  
  Email: ${data.email}

  ## Credits
  Made by ${data.name}
`;
}

module.exports = generateMarkdown;
