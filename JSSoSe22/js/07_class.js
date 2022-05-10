class Person {
  firstname = 'John';
  lastname = 'Doe';
  age = 42;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  #getFormattedName() {
    return `${this.firstname} ${this.lastname} (${this.age})`;
  }

  print() {
    console.log(this.#getFormattedName());
  }
}

const klaus = new Person('Klaus', 'Müller');
console.log(klaus.firstname, klaus.lastname, klaus.age);
klaus.print();

class User extends Person {
  password = null;
  constructor(firstname, lastname, password) {
    super(firstname, lastname);
    this.password = password;
  }

  get fullname() {
    return `${this.firstname} ${this.lastname}`;
  }

  set fullname(fn) {
    // const names = fn.split(' ');
    // this.firstname = names[0];
    // this.lastname = names[1];
    const [firstname, lastname] = fn.split(' '); // destructuring
    this.firstname = firstname;
    this.lastname = lastname;
  }

  static createUser(firstname, lastname, password) {
    const newUser = new this(firstname, lastname, password);
    newUser.age = this.defaultAge;
    return newUser;
  }

  static defaultAge = 1337;
}

const lydia = new User('Lydia', 'Schmitt', '5ecr3T');
lydia.age = 25;
lydia.print();
console.log(lydia.password);
console.log(lydia.fullname);
lydia.fullname = 'Lydia Schmidt';
console.log(lydia.lastname);
lydia.print();
lydia.fullname = 'Lydia Schmidt von Weißderteufelwoher'; // mehr als 2 Werte ignorieren wir
lydia.print();
lydia.fullname = 'Lydia'; // weniger als 2 werte => undefined
lydia.print();

const rüdiger = User.createUser('Rüdiger', 'Müller', 't0P 53cr3T');
rüdiger.print();
// console.log(rüdiger.#getFormattedName()); -SyntaxError: Private field '#getFormattedName' must be declared in an enclosing class
