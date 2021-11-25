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
while (true) {
    let NAME = prompt('Enter the NAME: ');
    let regex = RegExp(/^[A-Z]{1}[a-z]{3,}$/)
    let result = regex.test(NAME)
    if (result == true) {
        break;
    } else {
        console.log("Invalid Name ENTER PROPER NAME")
    }
}
while (true) {
    let LASTNAME = prompt('Enter the LASTNAME: ');
    let regex = RegExp(/^[A-Z]{1}[a-z]{3,}$/)
    let result = regex.test(LASTNAME)
    if (result == true) {
        break;
    } else {
        console.log("Invalid Name ENTER PROPER lastName")
    }
}
while (true) {
    let ADDRESS = prompt('Enter the ADDRESS: ');
    let regex = RegExp(/^[A-Za-z]{4,}$/)
    let result = regex.test(ADDRESS)
    if (result == true) {
        break;
    } else {
        console.log("Invalid Address ENTER PROPER Address")
    }
}
while (true) {
    let City = prompt('Enter the City: ');
    let regex = RegExp(/^[A-Z]{1}[a-z]{3,}$/)
    let result = regex.test(City)
    if (result == true) {
        break;
    } else {
        console.log("Invalid City ENTER PROPER CityNAME")
    }
}
while (true) {
    let STATE = prompt('Enter the STATE: ');
    let regex = RegExp(/^[A-Z]{1}[a-z]{3,}$/)
    let result = regex.test(STATE)
    if (result == true) {
        break;
    } else {
        console.log("Invalid State ENTER PROPER StateName")
    }
}
while (true) {
    let email = prompt('Enter the Email: ');
    let regex = RegExp(/([a-z0-9+-\\.]+)@([a-z0-9\\-]+)\\.([a-z]{2,6})(\\.[a-z]{2})?$/)
    let result = regex.test(email)
    if (result == true) {
        break;
    } else {
        console.log("Invalid Email ENTER PROPER mail")
    }
}
emp = new Employee(NAME, LASTNAME, ADDRESS, CITY, STATE, EMAIL)
let empdata = [emp]
console.log(empdata)