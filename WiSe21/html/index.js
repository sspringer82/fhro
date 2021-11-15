class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`,
    );
  }
}

const klaus = new Human('Klaus', 21);
klaus.sayHello();

class Person extends Human {
  constructor(name, age, height) {
    super(name, age);
    this.height = height;
  }

  sayHello() {
    super.sayHello();
    console.log(`I am ${this.height} cm tall.`);
  }
}

const anna = new Person('Anna', 22, 165);
anna.sayHello();

// Human.prototype.doIt = function () {
//   console.log('I do it!');
// };

function doIt(human) {
  if (!human.hasOwnProperty('name')) {
    throw new Error('type mismatch');
  }

  console.log('Hallo ', human.name);
}

doIt(klaus);
doIt(anna);
doIt({ age: 42 });
