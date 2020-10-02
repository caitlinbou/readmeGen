// initiate inquirer and fs
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// create an array of questions to pass to inquirer prompt
const questions = [
{
    Type: `input`,
    Message: `What is the title of your project?`,
    Name: `title` 
},
{
    Type: `input`,
    Message:`Please provide a brief description:`, 
    Name: `description` 
},  
{
    Type: `input`,
    Message:`What would you like included in your table of contents?`, 
    Name: `contents` 
},  
{
    Type: `input`,
    Message:`What installs are required?`, 
    Name: `installation` 
},  
{
    Type: `input`,
    Message:`usage questions`, 
    Name: `usage` 
},  
{
    Type: `list`,
    Message:`What license will you be using?`, 
    Name: `license` 
},  
{
    Type: `input`,
    Message:`Please let me know if you are open to contributions, and any details you would like included.`, 
    Name: `contributing` 
},  
{
    Type: `input`,
    Message:`If you have written tests for your application, please explain how to run them.`, 
    Name: `tests` 
},  
{
    Type: `input`,
    Message:`Please provide your GitHub username to direct questions.`, 
    Name: `github` 
}, 
{
    Type: `input`,
    Message: `Please provide your email address to direct questions.`, 
    Name: `email`
},
{
    Type: `input`,
    Message: `What word you like your badge to say?`, 
    Name: `message`
},
{
    Type: `list`,
    Message: `What color would you like your badge?`, 
    Choices: `[brightgreen, blue, blueviolet, red]`,
    Name: `color`
},
{
    Type: `input`,
    Message: `Please provide your email address to direct questions.`, 
    Name: `email`
}

];
// use inquirer to prompt user with questions array/initialize program
inquirer.prompt(questions).then(response =>{
// String to generate responses in MarkDown Format
let readMe = 
`
# ${response.title}

## Description
${response.description}
## Table of Contents
${response.contents}
## Installation
${response.installation}

## Usage 
${response.usage}
## License 
${response.license}
![${response.license}]()
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
For any questions please find me on GitHub or email me: 
[gitHub](${response.github})

[email](${response.email})
![${response.title}](https://img.shields.io/static/v1?label=${response.title}&message=${response.message}&color=${response.color})
![]()

`
 // write file using template generated from readMe string
    fs.writeFile("README.md", readMe, function(err) {
    if (err) {throw err
    }})
});


