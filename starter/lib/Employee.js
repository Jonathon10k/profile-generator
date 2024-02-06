// TODO: Write code to define and export the Employee class

class Employee {
    // Employee constructor
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Methods
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

let Joe = new Employee("Joe", "1", "joe@biz.com");
console.log(Joe);
module.exports = Employee;