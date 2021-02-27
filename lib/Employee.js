class Employee {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = 'Employee';
    }
    get Name() {
        return this.name;
    }
    get Id() {
        return this.id;
    }
    get Email() {
        return this.email;
    }
    get Role() {
        return this.role;
    }
}

module.exports = Employee;