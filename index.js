const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const employees = { Manager: [], Engineer: [], Intern: [] };

init();

function init() {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'newEmployee',
            message: 'Would you like to add an employee?'
        }])
        
        .then(({ newEmployee }) => newEmployee ? addEmployee() : console.log(employees));

        
};

function addEmployee() {
    inquirer
        .prompt([{
            type: 'text',
            name: 'name',
            message: "Enter employee's name",
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("please enter a name.")
                }
                
            }
        },
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
        {
            type: 'text',
            name: 'id',
            message: 'What is their employee id?',
            validate: id => {
                if (id) {
                    return true;
                } else {
                    console.log("please enter a valid id.")
                }
            }   
        },
        {
            type: 'text',
            name: 'email',
            message: 'What is their email?',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log("please enter a email.")
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the office number?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("please enter a office number.")
                }
            },
            when: ({ role }) => role == 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("please enter a github.")
                }
            },
            when: ({ role }) => role == 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is your school?',
            validate: name => {
                if (name) {
                    return true;
                } else {
                    console.log("please enter a school.")
                }
            },
            when: ({ role }) => role == 'Intern'
        },

        ])
        .then(answers=>{
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
                        answers.github,
                    ));
                };
                if (answers.role == 'intern') {
                    employees.Intern.push(new Intern(
                        answers.name,
                        answers.id,
                        answers.school,
                    ));
                };
                
                console.log(employees);
        });
    };

    createHTML() => {
        fs.writeFile('output/newindex.html', (err) => {
            if(err) throw(err);
            console.log('HTML file is complete!');
        })
    }