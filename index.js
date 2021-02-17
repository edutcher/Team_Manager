const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const questions = [{ name: "id", message: "Enter Employee ID: " },
    { name: "name", message: "Enter Employee Name: " },
    { name: "email", message: "Enter Employee Email: " },
    { type: "list", name: "role", message: "Enter Employee Role: ", choices: ['Engineer', 'Manager', 'Intern', 'Employee'] }
];

let team = [];
let done = false;

let addEmployee = ({ id, name, email, role }, spec) => {
    let newEmp;
    switch (role) {
        case 'Manager':
            newEmp = new Manager(id, name, email, role, spec);
            team.push(newEmp);
            break;
        case 'Engineer':
            newEmp = new Engineer(id, name, email, role, spec);
            team.push(newEmp);
            break;
        case 'Intern':
            newEmp = new Intern(id, name, email, role, spec);
            team.push(newEmp);
            break;
        default:
            newEmp = new Employee(id, name, email, role);
            team.push(newEmp);
            break;
    }
}

let checkRole = emp => {
    switch (emp.role) {
        case 'Manager':
            return "Enter Office Number: ";
        case 'Engineer':
            return "Enter Github Name: ";
        case 'Intern':
            return "Enter School Name: ";
        default:
            return "";
    }
}

async function getStuff() {
    let emp;
    await inquirer.prompt(questions).then(answers => {
        emp = answers;
    }).catch(er => { console.log(er); });
    let specQ = checkRole(emp);
    if (specQ != "") {
        await inquirer.prompt({ name: "spec", message: specQ }).then(ans => {
            addEmployee(emp, ans.spec);
        }).catch(er => { console.log(er); });
    }
    await inquirer.prompt({ type: 'list', name: "done", message: "Add Another Employee?", choices: ['Yes', 'No'] })
        .then(ans => {
            if (ans.done === 'No') done = true
        }).catch(er => { console.log(er); });
    console.log(team);
    if (!done) getStuff();
    else return;
}

getStuff();