module.exports = class Task {
  constructor(operator) {
    this.operand1 = Math.floor(Math.random() * 10);
    this.operand2 = Math.floor(Math.random() * 10);
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
};
