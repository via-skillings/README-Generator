const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const { error } = require('console');

console.log("Welcome to my README generator");
console.log("Answer the following questions to generate a high quality README for your projects.");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter a title to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter the description of your project to continue!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Enter the steps of installation to continue!');
                return false;
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license that will best suit your project.',
        choices: ['MPL 2.0', 'GNU', 'Apache', 'MIT', 'None of the above'],
        validate: your_Input => {
            if (your_Input) {
                return true;
            } else {
                console.log('Select a license for the project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can users contribute to this project?',
        validate: your_contribution => {
            if (your_contribution) {
                return true;
            } else {
                console.log('Provide information on how to contribute to the project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How does the user test this project?',
        validate: your_test => {
            if (your_test) {
                return true;
            } else {
                console.log('Explain how to test this project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username.',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your GitHub username!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
        validate: github_input => {
            if (github_input) {
                return true;
            } else {
                console.log('Please enter your email.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'filename',
        message: 'Enter the filename for the README (default: README.md):',
        default: 'README.md'
    },
    {
        type: 'confirm',
        name: 'append',
        message: 'Do you want to append to the file instead of overwriting it?',
        default: false
    }
];

function writeToFile(fileName, data, append) {
    const writeMethod = append ? fs.appendFile : fs.writeFile;
    writeMethod(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }

        console.log(`Success! You can now preview your ${fileName} file!`);
    });
}

async function init() {
    const inquirer = await import('inquirer');

    inquirer.default.prompt(questions)
        .then(function (userInput) {
            console.log(userInput);
            const markdown = generateMarkdown(userInput);
            const filename = userInput.filename || 'README.md';
            const append = userInput.append;
            writeToFile(filename, markdown, append);
        });
}

init();
