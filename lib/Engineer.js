const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(id, name, email, role, github) {

        super(id, name, email, role);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;