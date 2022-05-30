class User {
  constructor(firstname) {
    this.firstname = firstname;
  }

  greet() {
    return 'Hello ' + this.firstname;
  }
}

export default User;
