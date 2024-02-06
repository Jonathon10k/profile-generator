// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Manager extends Employee {
    // Employee constructor
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Methods
    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Manager";
    }
}

const Sarah = new Manager("Sarah", "2", "sarah@biz.com", 3);
console.log(Sarah);

module.exports = Manager;