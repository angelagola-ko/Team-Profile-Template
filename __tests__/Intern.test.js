const Intern = require('../lib/Intern');

//Test to get school
test('Get school', () => {
    const school = "Flying Squirrel Academy";
    const employee = new Intern("Jamie", 432 , "Jamie.432@gmail.com", school);
    expect(employee.school).toBe(school);
});