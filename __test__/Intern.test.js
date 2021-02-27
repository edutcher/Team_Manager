const Intern = require('../lib/Intern');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let int = new Intern(1, "Bob", "Bob@bob.com", "BobCF");

            expect(int.Id).toBe(1);
            expect(int.Name).toBe("Bob");
            expect(int.Email).toBe("Bob@bob.com");
            expect(int.School).toBe("BobCF");
        })
    })
})