const Task = require('./tasks');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//const task = new Task('-');

const operands = ['+', '-', '*', '/'];

(async () => {
  for (let i = 0; i < operands.length; i++) {
    for (let j = 0; j < 4; j++) {
      const task = new Task(operands[i]);
      await task.ask(rl);
    }
  }
  rl.close();
})();
