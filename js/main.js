"use strict";

//Q1
/*
let Person = {
    name:"",
    dateOfBirth:"",
    setName: (newName) => this.name = newName,
    getName: () => this.name,
    setdateOfBirth: (newDateOfBirth) => this.dateOfBirth = newDateOfBirth,
    getdateOfBirth: () => this.dateOfBirth,
    formatDate: (newdate) => { 
        let date = new Date(newdate);
        let formattedDate = [date.getFullYear(),
                        ('0' + (date.getMonth() + 1)).slice(-2),
                        ('0' + date.getDate()).slice(-2)].join('-');
        return formattedDate;                       
    },
        
    
    print: () => console.log("The person’s name is " + this.name + "\n" 
                           + "John was born on " + Person.formatDate(this.dateOfBirth)) 
};

let John = Object.create(Person);
John.setName("John");
John.setdateOfBirth(new Date("December 10, 1998"));
John.print();
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q2
let  Employee = {
    name:"",
    salary: 0,
    hireDate: new Date(),
    doJob: (jobTitle) => {
        return this.name + " is a " + jobTitle + " who earns $" + this.salary
    },
    setSalary: (newSalary) => this.salary = newSalary,
    setName: (newName) => this.name = newName,
    getAge: ()=> this.age,
    getName: ()=>  this.name,
    getSalary: () => this.salary,
    increaseSalary: (percentage)=> this.setSalary(this.getSalary() + (this.getSalary() * percentage)),
    increamentAge: (inc) => this.setAge(getAge() + inc)
    };

let Anna = Object.create(Employee);
Anna.setName("Anna");
Anna.setSalary(249995.50);
console.log(Anna.doJob("Programmer"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q3
function Person (newName, newDateOfBirth) {
    this.name = newName;
    this.dateOfBirth = newDateOfBirth;
    
    
}

let peter = new Person("Peter", new Date("November 10, 1985"));
function formatDate(newdate) { 
    let date = new Date(newdate);
    let formattedDate = [date.getFullYear(),
                    ('0' + (date.getMonth() + 1)).slice(-2),
                    ('0' + date.getDate()).slice(-2)].join('-');
    return formattedDate;                       
}
Person.prototype.toString = function personToString() {
    return "Name: " + this.name + ", DateOfBirth: " + formatDate(this.dateOfBirth);
  }

console.log(peter.toString());
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Q4

