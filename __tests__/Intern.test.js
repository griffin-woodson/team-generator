const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const intern = new Intern('Cuyler', '8', 'Cuyler@example.com', 'Arizona State University', );

    expect(intern.name).toBe('Cuyler');
    expect(intern.id).toBe('8');
    expect(intern.email).toBe('Cuyler@example.com');
    expect(intern.school).toBe('Arizona State University');
})