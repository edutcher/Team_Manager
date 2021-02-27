const Employee = require('./Employee');

class Intern extends Employee {
    constructor(id, name, email, school) {

        super(id, name, email);
        this.school = school;
        this.role = "Intern";
    }
    get School() {
        return this.school;
    }
}

module.exports = Intern;