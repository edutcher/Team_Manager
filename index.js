const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require(`./src/generateHTML`);

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
            newEmp = new Manager(id, name, email, spec);
            team.push(newEmp);
            break;
        case 'Engineer':
            newEmp = new Engineer(id, name, email, spec);
            team.push(newEmp);
            break;
        case 'Intern':
            newEmp = new Intern(id, name, email, spec);
            team.push(newEmp);
            break;
        default:
            newEmp = new Employee(id, name, email);
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
}

async function main() {
    await getStuff();
    while (!done) { await getStuff(); }
    fs.writeFileSync(`./dist/team.html`, generateHTML(team));
    fs.writeFileSync(`./dist/style.css`, `* {margin: 0px;padding:0px;}.container {width: 70%;display: flex;justify-content: center;align-items: center;}
    .card {height: 250px;width: 200px;box-shadow: 1px 1px lightgrey, 0px 0px 3px 3px lightgrey;margin: 25px;}
    .title{height:100px;background:red;width: 100%;text-align:center;color:white;}.cardTop{background:blue;color:white;}`)
}

main();