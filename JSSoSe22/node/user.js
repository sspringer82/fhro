export default class User {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}