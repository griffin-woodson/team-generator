const Manager = require('../lib/Manager');

test('creates a new manager', () => {
    const manager = new Manager('Seth', '1', 'Seth@example.com', '13');

    expect(manager.name).toBe('Seth');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('Seth@example.com');
    expect(manager.officeNumber).toBe('13');
})