const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');


// Employees Object Containing Team
const employees = [];

init();

async function init() {
    let addEmp = true;
    // initially addEmp == true
    while (addEmp) {
        // first iteration: ask the question if they want to add an employee
        addEmp = await inquirer.prompt([
            {
                type: 'confirm',
                name: 'newEmployee',
                message: 'Would you like to add an employee?'
            }])
            // this parameter newEmployee represents the answer of the
            // inquirer.prompt. 
            // If they say yes then newEmployee == true
            // otherwise newEmployee == false
            .then(async ({ newEmployee }) => {
                console.log('newEmployee = ' + newEmployee)
                if (newEmployee) {
                    // newEmployee == true
                    await addEmployee();
                    return true;
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
    addHTML(employees)

};

async function addEmployee() {
    await inquirer
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
                    console.log('\n', email);
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
        .then(answers => { // Adding the Employee to the employees object
            console.log(answers);
            if (answers.role == 'Manager') {
                employees.push(new Manager(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.officeNumber,
                    'Manager')
                );
            };
            if (answers.role == 'Engineer') {
                employees.push(new Engineer(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.github,
                    'Engineer'
                ));
            };
            if (answers.role == 'Intern') {
                employees.push(new Intern(
                    answers.name,
                    answers.id,
                    answers.email,
                    answers.school,
                    'Intern'
                ));
            };
            console.log(employees)
        });
};


// const createHTML = (member) => {
//     fs.writeFile('output/newindex.html', (err) => {
//         if(err) throw(err);
//         console.log('HTML file is complete!');
//     })
// }

//Appends HTML to index.html
//Checks to see if employees were entered.
function addHTML(member) {
    let data = "";
    if (member.length === 0) {
        data = `no employees`
    }
    else {
//Loops over employees
        for (i = 0; i < member.length; i++) {


            console.log('member', member)
            const name = member[i].getName();
            const id = member[i].getId();
            const role = member[i].getRole();
            const email = member[i].getEmail();

            //Adding html to html file

            if (role === "Engineer") {
                const github = member[i].getGithub();
                data += `
                <div class="card m-3 shadow bg-light" style="width: 18rem;">
                <div class="card-body bg-primary">
                <h2 class="card-title bg-primary text-white">${name}</h2>
                <h4 class="text-white"><i class="fas fa-glasses text-white"></i> Engineer</h4>
            </div>
            <div class="card-body bg-light mt-4 mb-4">
                <h5>ID:${id}</h5>
                <h5>Email: <a href="mailto:${email}">${email}</a></h5>
                <h5>Github: <a href="https://github.com/${github}">${github}</a></h5>
            </div>
            </div>`
            } else if (role === "Manager") {
                const officeNumero = member[i].getOfficeNumber();
                data += `
                <div class="card m-3 shadow bg-light" style="width: 18rem;">
                    <div class="card-body bg-primary">
                        <h2 class="card-title bg-primary text-white">${name}</h2>
                        <h4 class="text-white"><i class="fas fa-mug-hot text-white"></i> Manager</h4>
                    </div>
                    <div class="card-body bg-light mt-4 mb-4">
                        <h5>ID: ${id}</h5>
                        <h5>Email: <a href="mailto:${email}">${email}</a></h5>
                        <h5>Office Number: ${officeNumero}</h5>
                    </div>
                </div> `
            } else {
                const schoolIsCool = member[i].getSchool();
                data += ` <div class="card m-3 shadow bg-light" style="width: 18rem;">
                <div class="card-body bg-primary">
                    <h2 class="card-title bg-primary text-white">${name}</h2>
                    <h4 class="text-white"><i class="fas fa-school text-white"></i> Intern</h4>
                </div>
                <div class="card-body bg-light mt-4 mb-4">
                    <h5>ID: ${id} </h5>
                    <h5>Email: <a href="mailto:${email}">${email}</a></h5>
                    <h5>School: ${schoolIsCool}</h5>
                </div>
            </div>
            `
            } 
        }
    }
    data += `
    </main>  
    </body>
    </html>`
    console.log('data', data)
    fs.appendFile("./dist/index.html", data, err => { if (err) throw err });
};