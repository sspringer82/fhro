const Task = require('./tasks');
const readline = require('readline');

var program = require('commander');

program
  .version('0.1.0')

  .option('-l, --level [level]', 'How hard should it be', 1)
  .option('-n, --number [amount]', 'How many tasks per category', 4)
  .parse(process.argv);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const operands = ['+', '-', '*', '/'];

(async () => {
  try {
    for (let i = 0; i < operands.length; i++) {
      for (let j = 0; j < program.number; j++) {
        const task = new Task(operands[i], parseInt(program.level, 10));
        await task.ask(rl);
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    rl.close();
  }
})();
