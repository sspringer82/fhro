import fs from 'fs';
// const fs = require('fs);

const contentOfFile = fs.readFileSync('input.txt', 'utf-8');
console.log('sync: ', contentOfFile);

fs.readFile('input.txt', 'utf-8', (err, contentOfFile) => {
  if (err) {
    throw err;
  }
  console.log('async: ', contentOfFile);
});

const contentOfFile2 = await fs.promises.readFile('input.txt', 'utf-8');
console.log('promise: ', contentOfFile2);
