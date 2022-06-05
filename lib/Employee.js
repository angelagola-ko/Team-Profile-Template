class Employee {
    constructor(name, id, email, type) {
        console.log('Employee class: ', name, id, email )
        this.name = name;
        this.id = id;
        this.email = email;
        this.type = type;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;

    }

    getEmail() {
        return this.email;

    }

    getRole() {
        return this.type;   
    }
}

//console.log('Within the newEmployee class' + new Employee());

module.exports = Employee;