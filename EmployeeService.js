class Employee {
    constructor(name, lastName, address, city, state, email) {
        this.name = name
        this.lastName = lastName
        this.address = address
        this.city = city
        this.state = state
        this.email = email
    }
}
const prompt = require('prompt-sync')();
let NAME = prompt('Enter the NAME: ');
let LASTNAME = prompt('Enter the LASTNAME: ');
let ADDRESS = prompt('Enter the ADDRESS: ');
let City = prompt('Enter the City: ');
let STATE = prompt('Enter the STATE: ');
let email = prompt('Enter the Email: ');
emp = new Employee(NAME, LASTNAME, ADDRESS, CITY, STATE, EMAIL)
let empdata = [emp]
console.log(empdata)