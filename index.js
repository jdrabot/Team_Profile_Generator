const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeams = require("./src/page-template");
const myTeam = [];

const questions = [
    {
        type: "list",
        name: "teamMember",
        message: "What role does the employee play?",
        choices: ["Manager", "Engineer", "Intern", "Finish"],
    },
];

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is the engineer's github username?",
    },
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the intern's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "Where did the intern go to school",
    },
];

function manager() {
    inquirer.prompt(managerQuestions).then((res) => {
        const manag = new Manager(res.name, res.id, res.email, res.officeNumber);
        myTeam.push(manag);
    });
}

