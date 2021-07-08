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
        choices: ["Manager", "Engineer", "Intern"],
    },
];

