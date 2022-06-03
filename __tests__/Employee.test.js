const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Laura', 8, 'angela@.com');

    expect(employee.name).toBe('Laura');
    expect(employee.id).toBe(expect.any(Number));
    expect(employee.email).toBe(expect.any(Object));
})
