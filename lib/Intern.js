const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school, type) {
        super(name, id, email, type);
        this.school = school;

    }


    getSchool() {
        return this.school;
    }

    // getRole() {//Overridden to return 'Intern'
    //     return this.type;

    }

    
//}

module.exports = Intern;