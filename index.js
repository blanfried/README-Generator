// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your project title?",
      },
      {
        type: "input",
        name: "description",
        message: "Please enter your description:",
      },
      {
        type: "input",
        name: "installation",
        message: "Please enter your installation instructions:",
      },
      {
        type: "input",
        name: "information",
        message: "Please enter your usage information:",
      },
      {
        type: "input",
        name: "guidelines",
        message: "Please enter your usage contribution guidelines:",
      },
      {
        type: "input",
        name: "instructions",
        message: "Please enter your usage test instructions:",
      },
      {
        type: "input",
        name: "username",
        message: "Please enter your Github username:",
      },
      {
        type: "input",
        name: "email",
        message: "Please enter your email:",
      },
      {
        type: "list",
        name: "license",
        message: "Select license type:",
        choices: ["MIT", "Apache"],
      },
    ])
    .then((response) => {
      //   console.log(response);
      writeToFile(generateMarkdown(response));
      return response;
    });
};

// TODO: Create a function to write README file
function writeToFile(data) {
  newReadMe = "Hi";
  fs.writeFile("generated_README.md", data, (err) =>
    err ? console.error(err) : console.log("New README made!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // call questions
  questions();
}

// Function call to initialize app
init();