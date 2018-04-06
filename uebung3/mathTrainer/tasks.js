module.exports = class Task {
  constructor(operator, level) {
    const operands = this.getOperands(level);
    this.operand1 = operands[0];
    this.operand2 = operands[1];

    if (operator === '/') {
      this.operand1 = this.operand1 * this.operand2;
    }
    this.operator = operator;
    const obj = {
      '+': this.operand1 + this.operand2,
      '-': this.operand1 - this.operand2,
      '*': this.operand1 * this.operand2,
      '/': this.operand1 / this.operand2,
    };
    this.result = obj[operator];
  }

  getOperands(level) {
    switch (level) {
      case 1:
        return [Task.randomNumber(10), Task.randomNumber(10)];
        break;
      case 2:
        return Task.shuffle([Task.randomNumber(10), Task.randomNumber(100)]);
        break;
      case 3:
        return [Task.randomNumber(100), Task.randomNumber(100)];
        break;
    }
  }

  static randomNumber(multiplier) {
    return Math.floor(Math.random() * multiplier);
  }

  static shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  toString() {
    return `${this.operand1} ${this.operator} ${this.operand2} = `;
  }

  ask(rl) {
    return new Promise((resolve, reject) => {
      rl.question(this.toString(), answer => {
        if (parseInt(answer, 10) === this.result) {
          console.log('richtig!');
        } else {
          console.log('falsch');
        }
        resolve(true);
      });
    });
  }
};
