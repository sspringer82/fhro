const obj = {
  name: 'Klaus',
  age: 42,
};

console.log(obj.name, obj.age);

obj.name = 'Peter';

console.log(obj.name);

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello ${this.name} (${this.age})`);
  }
}

const maria = new User('Maria', 22);
maria.name = 'Cordula';
maria.sayHello();

User.prototype.greet = function () {
  console.log(`Hello ${this.name}!!!`);
};
maria.greet();
const h = 'Hallo';
h.greet();

String.prototype.greet = function () {
  console.log('Hallo ', this.toString());
};

h.greet();
