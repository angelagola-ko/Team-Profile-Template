const Engineer = require ('../lib/Engineer');

//Test to get github
test('Get github', () => {
   const github = 'bob.dob';
   const employee = new Engineer("bob", 867, "bob@gmail.com", github);
   expect(employee.github).toBe(github);
})