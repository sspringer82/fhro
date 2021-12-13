import leftpad from 'left-pad';

export default class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getName() {
    return `${this.name} (${leftpad(this.age, 3, '0')})`;
  }
}

// alt:
// module.exports = User;
