const Manager = require('../lib/Manager');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let man = new Manager(1, "Bob", "Bob@bob.com", 56);

            expect(man.Id).toBe(1);
            expect(man.Name).toBe("Bob");
            expect(man.Email).toBe("Bob@bob.com");
            expect(man.Office).toBe(56);
        })
    })
})