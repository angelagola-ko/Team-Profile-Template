const Manager = require('../lib/Manager');

test ('Get office number', () => {
    const officeNumber = "309";
    const employee = new Manager("Vicky", 39, "vicky@gmail.com", officeNumber);
    expect(employee.officeNumber).toBe(officeNumber);
});
