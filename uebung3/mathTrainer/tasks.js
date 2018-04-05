module.exports = class Task {
  constructor(operator) {
    if (operator === '/') {
      this.operand1 = Math.floor(Math.random() * 10);
      this.operand2 = Math.floor(Math.random() * 10);
      this.operand1 = this.operand1 * this.operand2;
    } else {
      this.operand1 = Math.floor(Math.random() * 10);
      this.operand2 = Math.floor(Math.random() * 10);
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
