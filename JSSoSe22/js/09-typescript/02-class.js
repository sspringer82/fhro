"use strict";
class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
    get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
    getFormattedName() {
        return `${this.fullname} (${this.age})`;
    }
    print() {
        console.log(this.getFormattedName());
    }
}
const uli = new Person('Uli', 'Conditor', 26);
uli.print();
function greet(p) {
    return `Hallo ${p.fir}`;
}
