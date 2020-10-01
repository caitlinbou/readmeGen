var inquirer = require(`inquirer`);
var fs = require(`fs`);
// create an array of questions to pass to inquirer prompt
const questions = [
    {
    Message: `What is the title of your project?`,
    Name: `title` 
},
{
    Message:`Please provide a brief description:`, 
    Name: `description` 
},  


];

// write a readMe in a markdown file to generate a template
function writeToFile(fileName, data) {
}

// function that will generate my readme template
function generateMarkdown(data) {
    return `# ${data.title}
 
  
  `;
  // write file using template generated from readme function
  fs.appendFile("README.md", answers, function(err) {
  if (err){
      return err;
  } 
  })
}

// use inquirer to prompt user with questions array/initialize program
function init() {


}
// function call to initialize program
init();
// use answerrs that come back from inquirer, pass into generate readme function

// appendFile use `\n`





