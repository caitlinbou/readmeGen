// array of questions to pass through inquirer prompt
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
      message: `What license will you be using? (As a reminder, make sure to update the date and your name in the license verbiage after README generates)`,
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
      message: `What word would you like your personal repe badge to say?`,
      name: `message`,
    },
    {
      type: `list`,
      message: `What color would you like your badge?`,
      choices: [`brightgreen`, `blue`, `blueviolet`, `red`],
      name: `color`,
    },
  ];

  module.exports = questions