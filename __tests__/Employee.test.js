const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Laura', 8, 'Laura@gmail.com');

    expect(employee.name).toBe('Laura');
    expect(employee.id).toBe(8);
    expect(employee.email).toBe('Laura@gmail.com');
});
