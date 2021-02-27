const Engineer = require('../lib/Engineer');

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create a new Employee class with given information", () => {
            let eng = new Engineer(1, "Bob", "Bob@bob.com", "Bob");

            expect(eng.Id).toBe(1);
            expect(eng.Name).toBe("Bob");
            expect(eng.Email).toBe("Bob@bob.com");
            expect(eng.Github).toBe("Bob");
        })
    })
})