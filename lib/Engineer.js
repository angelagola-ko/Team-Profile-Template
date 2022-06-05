const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github, type) {
        super(name, id, email, type);
        console.log('\n Engineer class:', name, id, email, github);
        //get github
        this.github = github;

    }

    getGithub() {
        return this.github;

    }

    // getRole() {//Overridden to return 'Engineer'
    //     return "Engineer";
    }
//}

module.exports = Engineer;