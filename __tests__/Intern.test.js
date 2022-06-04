const Intern = require('../lib/Intern');


test('Get school', () => {
    const school = "Flying Squirrel Academy";
    const employee = new Intern("Jamie", 432 , "Jamie.432@gmail.com", school);
    expect(employee.school).toBe(school);
});