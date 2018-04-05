module.exports = class Task {
  constructor() {
    this.operand1 = Math.floor(Math.random() * 10);
    this.operand2 = Math.floor(Math.random() * 10);
    this.operation = '+';
    this.result = this.operand1 + this.operand2;
  }

  toString() {
    return this.operand1 + ' + ' + this.operand2 + ' = ';
  }
};
