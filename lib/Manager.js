const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, office) {

        super(id, name, email);
        this.office = office;
        this.role = "Manager";
    }
    get Office() {
        return this.office;
    }
}


module.exports = Manager;