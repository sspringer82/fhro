"use strict";
class U {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getFullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}
U.lastname = 'Meier';
const u = new U('Günther', U.lastname);
console.log(u.getFullname());
function greet(u) {
    console.log('Hallo ', u.firstname);
}
greet({ firstname: 'Klaus', lastname: 'Müller' });
greet(u);
