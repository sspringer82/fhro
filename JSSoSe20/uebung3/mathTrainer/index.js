const readline = require('readline');
const program = require('commander');
const chalk = require('chalk');
const Task = require('./tasks');
const calculateTiming = require('./timing');

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

const start = new Date();
let result = {
  count: 0,
  correct: 0,
  wrong: 0,
};

(async () => {
  try {
    for (let i = 0; i < operands.length; i++) {
      for (let j = 0; j < program.number; j++) {
        const task = new Task(operands[i], parseInt(program.level, 10));
        result = await task.ask(rl, result);
      }
    }
  } catch (e) {
    console.log(e);
  } finally {
    const end = new Date();
    console.log('It took you: ' + calculateTiming(start, end));
    console.log(
      chalk.green('correct: ' + result.correct),
      chalk.red(' wrong: ' + result.wrong),
      ' Total: ' + result.count,
    );
    rl.close();
  }
})();
