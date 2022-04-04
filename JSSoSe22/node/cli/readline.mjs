import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });


while (true) {
    const answer = await rl.question('What do you think of Node.js? ');
    console.log(`Thank you for your valuable feedback: ${answer}`);

    if (answer === 'awesome') {
        break;
    }
}

rl.close();