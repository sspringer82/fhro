import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('1 + 1 = ', (answer) => {
  if (parseInt(answer, 10) === 2) {
    console.log('richtig');
  } else {
    console.log('falsch');
  }

  rl.close();
});
