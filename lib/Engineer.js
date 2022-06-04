const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        //get github
        this.github = github;

    }

    getGithub() {
        return this.github;

    }

    getRole() {//Overridden to return 'Engineer'
        return "Enginner";
    }
}

module.exports = Engineer;