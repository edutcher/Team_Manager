const Employee = require('../lib/Employee');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let emp = new Employee(1, "Bob", "Bob@bob.com");

            expect(emp.Id).toBe(1);
            expect(emp.Name).toBe("Bob");
            expect(emp.Email).toBe("Bob@bob.com");
        })
    })
})