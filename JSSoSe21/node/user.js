class User {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

module.exports = User;
