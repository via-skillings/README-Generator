function generateMarkdown(data) {
    return `# ${data.title}
## License:
[![license](https://img.shields.io/badge/license-${data.license}-blue.svg)](https://img.shields.io/badge/license-${data.license}-blue.svg)
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Additional Info](#additional-info)

## Description:
${data.description}
## Installation:
${data.installation}
## Usage:
${data.usage}
## License:
${data.license}
## Contribution:
${data.contribution}
## Testing:
${data.test}

## Contact Information:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email}) `;
}

module.exports = generateMarkdown;
