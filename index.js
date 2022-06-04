const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// Employees Object Containing Team
const employees = { Manager: [], Engineer: [], Intern: [] };

init();

async function init() {
    let addEmp= true;
    // initially addEmp == true
    while (addEmp) {
        // first iteration: ask the question if they want to add an employee
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'newEmployee',
                message: 'Would you like to add an employee?'
            }])
            // this parameter newEmployee represents the answer of the
            // inquirer.prompt. 
            // If they say yes then newEmployee == true
            // otherwise newEmployee == false
            .then(({newEmployee}) => {
                console.log('newEmployee = ' + newEmployee)
                if (newEmployee) {
                    // newEmployee == true
                    addEmployee();
                } else {
                    // newEmployee == false
                    console.log(employees);
                    addEmp = false;
                }             
            })
            // changing addEmp to false so it only runs once
            //addEmp = false;
            //.then(({ newEmployee }) => newEmployee ? addEmployee() : console.log(employees));
    }
};

function addEmployee() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Enter employee's name",
            validate: name => {
                if (name) {
                    console.log("\n", name);
                    return true;
                } else {
                    console.log("please enter a name.")
                }
            }
        },
        // Q1: What is the role
        {
            type: 'list',
            name: 'role',
            message: 'What is their role?',
            choices: [
                'Engineer',
                'Manager',
                'Intern'
            ]
        }, 
        // Q2 : Employee ID
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee id?',
            validate: id => {
                if (id) {
                    console.log('\n', id);
                    return true;
                } else {
                    console.log("please enter a valid id.")
                }
            }   
        },
        // Q3: Email
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?',
            validate: email => {
                if (email) {
                    console.log('\n',email);
                    return true;
                } else {
                    console.log("please enter a email.")
                }
            }
        },
        // Q4: OfficeNumber for Manager
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?',
            validate: name => {
                if (name) {
                    console.log('\n', name);
                    return true;
                } else {
                    console.log("please enter a office number.")
                }
            },
            when: ({ role }) => role == 'Manager'
        },
        // Q4: Github For Engineer 
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub?',
            validate: name => {
                if (name) {
                    console.log('\n', name);
                    return true;
                } else {
                    console.log("please enter a github.")
                }
            },
            when: ({ role }) => role == 'Engineer'
        },
        // Q4: School for Intern
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
            validate: name => {
                if (name) {
                    console.log('\n', name);
                    return true;
                } else {
                    console.log("please enter a school.")
                }
            },
            when: ({ role }) => role == 'Intern'
        },
        ])
        .then(answers=>{ // Adding the Employee to the employees object
            console.log(answers);
                if(answers.role == 'Manager') {
                    employees.Manager.push(new Manager(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.officeNumber )
                        );
                };
                if(answers.role == 'Engineer') {
                    employees.Engineer.push(new Engineer(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.github,
                    ));
                };
                if (answers.role == 'Intern') {
                    employees.Intern.push(new Intern(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.school,
                    ));
                };                
                console.log(employees)
            });
        };


    const createHTML = () => {
        fs.writeFile('output/newindex.html', (err) => {
            if(err) throw(err);
            console.log('HTML file is complete!');
        })
    }