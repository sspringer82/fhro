function validateHex(input) {
  const hexChars = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
  ];
  for (let i = 0; i < input.length; i++) {
    if (hexChars.indexOf(input[i].toLowerCase()) === -1) {
      return false;
    }
  }
  return true;
}

function validateHex2(input) {
  return parseInt(input, 16).toString(16) === input;
}

function validateHex3(input) {
  return /^[0-9a-f]*$/i.test(input);
}

console.log(validateHex3('ff00ff'));
console.log(validateHex3('f0f'));
console.log(validateHex3('z8723p'));
