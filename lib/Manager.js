const Employee = require('./Employee');

class Manager extends Employee {
    constructor(id, name, email, role, office) {

        super(id, name, email, role);
        this.office = office;
    }
    getOffice() {
        return this.office;
    }
}


module.exports = Manager;