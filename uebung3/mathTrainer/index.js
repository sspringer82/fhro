const Task = require('./tasks');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const task = new Task('-');

rl.question(task.toString(), answer => {
  debugger;
  if (parseInt(answer, 10) === task.result) {
    console.log('richtig!');
  } else {
    console.log('falsch');
  }
});
