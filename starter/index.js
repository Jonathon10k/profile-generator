const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const template = require("./src/page-template");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("../starter/src/page-template.js");

const teamData = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.

inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is the name of your team manager?"
    },
    {
        name: "id",
        type: "input",
        message: "What is their employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is their email address?"
    },
    {
        name: "officeNumber",
        type: "input",
        message: "And finally, what is their office number?"
    },
    {
        name: "choices",
        type: "list",
        message: "Thank you. Next would you like to:",
        choices: ["Add an engineer", "Add an intern", "Finish building the team"]
    }

]).then(response => {
    let manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    teamData.push(manager); // Push manager object to teamData array
    nextChoice(response.choices);

});

// Engineer prompt set
function promptsEngineer() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the engineer's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is their employee ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is their email address?"
        },
        {
            name: "github",
            type: "input",
            message: "And finally, what is their GitHub username?"
        },
        {
            name: "choices",
            type: "list",
            message: "Thank you. Next would you like to:",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }

    ]).then(response => {

        let engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamData.push(engineer);
        nextChoice(response.choices);
    });
}

// Intern prompt set
function promptsIntern() {
    inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the intern's name?"
        },
        {
            name: "id",
            type: "input",
            message: "What is their employee ID?"
        },
        {
            name: "email",
            type: "input",
            message: "What is their email address?"
        },
        {
            name: "school",
            type: "input",
            message: "And finally, what is their school?"
        },
        {
            name: "choices",
            type: "list",
            message: "Thank you. Next would you like to:",
            choices: ["Add an engineer", "Add an intern", "Finish building the team"]
        }

    ]).then(response => {
        let intern = new Intern(response.name, response.id, response.email, response.school);
        teamData.push(intern);
        nextChoice(response.choices);
    });
}

// Decide next option (receives value from response.choices)
function nextChoice(choice) {
    switch (choice) {
        case "Add an engineer":
            promptsEngineer();
            break;
        case "Add an intern":
            promptsIntern();
            break;
        case "Finish building the team":
            renderTeam();
            break;
        default: console.log("Error");
            break;
    }
}

function renderTeam() {
    console.log(teamData);
    console.log(template.generateTeam(teamData));
}

