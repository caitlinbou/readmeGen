// initiate inquirer and fs
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// create an array of questions to pass to inquirer prompt
//TODO: This may be put into a separate file and called upon with module.exports = thatFileName
const questions = [
  {
    type: `input`,
    message: `What is the title of your project?`,
    name: `title`,
  },
  {
    type: `input`,
    message: `Provide a brief description of your project:`,
    name: `description`,
  },
  {
    type: `input`,
    message: `What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.`,
    name: `installation`,
  },
  {
    type: `input`,
    message: `Provide a brief description of how to use your application. Remember to add any screenshots/video walk throughs on your own!`,
    name: `usage`,
  },
  {
    type: `list`,
    message: `What license will you be using?`,
    name: `license`,
    choices: [
      `MIT`,
      `GNU GPL v3`,
      `Apache 2.0`,
      `Placeholder, I prefer a different option`,
    ],
  },
  {
    type: `input`,
    message: `Are you open to contributions? Please include any details you wish to provide potential contributors.`,
    name: `contributing`,
  },
  {
    type: `input`,
    message: `If you have written tests for your application, please explain how to run them.`,
    name: `tests`,
  },
  {
    type: `input`,
    message: `Please provide your GitHub username to direct questions.`,
    name: `github`,
  },
  {
    type: `input`,
    message: `Please provide your email address to direct questions.`,
    name: `email`,
  },
  {
    type: `input`,
    message: `What word you like your badge to say?`,
    name: `message`,
  },
  {
    type: `list`,
    message: `What color would you like your badge?`,
    choices: [`brightgreen`, `blue`, `blueviolet`, `red`],
    name: `color`,
  },
];

// use inquirer to prompt user with questions array/initialize program
inquirer.prompt(questions).then((response) => {
  const shield = response.title.replace(/\s+/g, "");
  const shieldMess = response.message.replace(/\s+/g, "");

// TODO:Licensing badge and display of selected license. This could be a different file.
let badgeLicense = ``;
if (response.license === `MIT`) {
badgeLicense = `[![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
licenseWords = `
Copyright <YEAR> <COPYRIGHT HOLDER>
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
`;
} else if (response.license === `GNU GPL v3`) {
badgeLicense = `[![GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
licenseWords = `    
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
`;
} else if (response.license === `Apache 2.0`) {
badgeLicense = `[![Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
licenseWords = `   
Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
     
    http://www.apache.org/licenses/LICENSE-2.0
     
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
} else {badgeLicense = `Placeholder text, user to update`, licenseWords = `Placeholder text, user to update`;}
  
// TODO: This can be in a different file
// String to generate responses in MarkDown Format
let readMe = `
# ${response.title}
${badgeLicense}
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
${licenseWords}
## Contributing
${response.contributing}
## Tests
${response.tests}
## Questions
For any questions please find me on GitHub or email me: 

[gitHub profile](https://github.com/${response.github})

[email contact](mailto:${response.email})

![${shield}](https://img.shields.io/static/v1?label=${shield}&message=${shieldMess}&color=${response.color})
`;

  // write file using template generated from readMe string
  fs.writeFile("README.md", readMe, function (err) {
    if (err) {
      console.log(err);
    }
  });
  console.log("YAY YOU DID IT");
});

// TODO: Screencastify to create a walkthrough video to include link in my readme
// TODO: alter readMe
// TODO: refactor--create different js files
// TODO: WHAT are they looking for in terms of unique badge for repo? Is what I did fine?
