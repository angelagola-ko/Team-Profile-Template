const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        console.log('\n Engineer class:', name, id, email, github);
        //get github
        this.github = github;

    }

    getGithub() {
        return this.github;

    }

    getRole() {//Overridden to return 'Engineer'
        return "Engineer";
    }
}

module.exports = Engineer;