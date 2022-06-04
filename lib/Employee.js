class Employee {
    constructor(name, id, email) {
        console.log('Employee class: ', name, id, email )
        this.name = name;
        this.id = id;
        this.email = email;
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
        return "Employee";
        
    }
}

//console.log('Within the newEmployee class' + new Employee());

module.exports = Employee;