const Engineer = require('../lib/Engineer');

test('creates an engineer', () => {
    const engineer = new Engineer('Dan', '4', 'Dan@example.com', 'Dan68057');

    expect(engineer.name).toBe('Dan');
    expect(engineer.id).toBe('4');
    expect(engineer.email).toBe('Dan@example.com');
    expect(engineer.github).toBe('Dan68057')
})