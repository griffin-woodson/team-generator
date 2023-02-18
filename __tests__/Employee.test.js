const Employee = require('../lib/Employee');

test('creates an employee', () => {
    const employee = new Employee('Ant', '3', 'Ant@example.com');

    expect(employee.name).toBe('Ant');
    expect(employee.id).toEqual('3');
    expect(employee.email).toBe('Ant@example.com');
})