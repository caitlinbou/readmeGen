// initiate inquirer and fs
const inquirer = require(`inquirer`);
const fs = require(`fs`);

// TODO: HOW do I make the right shield show up towards the top of page, and the actual license show up in the license section?
const mit = `[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
const gnu =`[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
const apache =`[![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;


// create an array of questions to pass to inquirer prompt
const questions = [
{
    type: `input`,
    message: `What is the title of your project?`,
    name: `title` 
},
{
    type: `input`,
    message:`Please provide a brief description:`, 
    name: `description` 
},  
{
    type: `input`,
    message:`What would you like included in your table of contents?`, 
    name: `contents` 
},  
{
    type: `input`,
    message:`What installs are required?`, 
    name: `installation` 
},  
{
    type: `input`,
    message:`usage questions`, 
    name: `usage` 
},  
{
    type: `list`,
    message:`What license will you be using?`, 
    name: `license`,
    choices: [`[MIT]`, `[GNU GPL v3]`, `[Apache 2.0]`, `Placeholder, I prefer a different option`]
},  
{
    type: `input`,
    message:`Please let me know if you are open to contributions, and any details you would like included.`, 
    name: `contributing` 
},  
{
    type: `input`,
    message:`If you have written tests for your application, please explain how to run them.`, 
    name: `tests` 
},  
{
    type: `input`,
    message:`Please provide your GitHub username to direct questions.`, 
    name: `github` 
}, 
{
    type: `input`,
    message: `Please provide your email address to direct questions.`, 
    name: `email`
},
{
    type: `input`,
    message: `What word you like your badge to say?`, 
    name: `message`
},
{
    type: `list`,
    message: `What color would you like your badge?`, 
    choices: [`brightgreen`, `blue`, `blueviolet`, `red`],
    name: `color`
}
];
// use inquirer to prompt user with questions array/initialize program
inquirer.prompt(questions).then(response =>{
// String to generate responses in MarkDown Format
let readMe = 
`
# ${response.title}
https://img.shields.io/static/v1?label=license&message=${response.license}&color=<COLOR>
## Description
${response.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
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

[gitHub](https://github.com/${response.github})

[email](${response.email})

![${response.title}](https://img.shields.io/static/v1?label=${response.title}&message=${response.message}&color=${response.color})
![]()

`
 // write file using template generated from readMe string
    fs.writeFile("README.md", readMe, function(err){
        if (err) {console.log(err)
    }})
    console.log("YAY YOU DID IT")
});

// TODO: Screencastift to create a walkthrough video to include link in my readme
// TODO: make my readme
// TODO: refactor--create different js files


