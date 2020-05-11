const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('First? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('Second? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
  });
});

console.log("hier geht's weiter");
