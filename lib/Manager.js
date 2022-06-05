const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber,type) {
        super(name,id,email, type);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;