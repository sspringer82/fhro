function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = 42;
}

Person.prototype.print = function () {
  console.log(`${this.firstname} ${this.lastname} (${this.age})`);
};

const claudia = new Person('Claudia', 'Meier');
claudia.print();

Person.prototype.greet = function () {
  return 'Hallo ' + this.firstname;
};

const dieter = new Person('Dieter', 'Bäcker');
console.log(dieter.greet());

console.log(claudia.greet());

console.log(typeof dieter); // object
console.log(typeof 42); // number

console.log(dieter instanceof Person); // true

const string = 'asdf';
console.log(string.toUpperCase());

String.prototype.toUpperCase = function () {
  return this.toLowerCase();
};

console.log('ASDF'.toUpperCase());

delete String.prototype.toUpperCase;

try {
  console.log('ASDF'.toUpperCase());
} catch (e) {
  console.error(e.message);
}
