const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateTeams = require("./src/page-template");
const myTeam = [];

// All questions for the prompts in the command line created here
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

// all functions to run the prompts are here
function manager() {
    inquirer.prompt(managerQuestions).then((res) => {
        const manag = new Manager(res.name, res.id, res.email, res.officeNumber);
        myTeam.push(manag);
        addTeamQuestions();
    });
}

function engineer() {
    inquirer.prompt(engineerQuestions).then((res) => {
        const engin = new Engineer(res.name, res.id, res.email, res.githubUsername);
        myTeam.push(engin);
        addTeamQuestions();
    });
}

function intern() {
    inquirer.prompt(internQuestions).then((res) => {
        const inter = new Intern(res.name, res.id, res.email, res.school);
        myTeam.push(inter);
        addTeamQuestions();
    });
}

function addTeamQuestions() {
    inquirer.prompt(questions).then((res) => {
        switch (res.teamMember) {
            case "Engineer":
                engineer();
                break;
            case "Intern":
                intern();
                break;
            case "Manager":
                manager();
                break;
            case "Finish":
                console.log("HTML has been created.")
                fs.writeFileSync("./output/index.html", generateTeams(myTeam));
        }
    });
}

function init() {
    console.log("Add team members: ");
    addTeamQuestions();
};

init();