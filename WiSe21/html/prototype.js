const name = 'Klaus';

console.log(name.toUpperCase());

const anna = 'Anna';

// delete String.prototype.toUpperCase;

// String.prototype.toUpperCase = function () {
//   return 'HELLO';
// };

// console.log(anna.toUpperCase());
// console.log(name.toUpperCase());

String.prototype.doIt = function () {
  return 'BYE BYE';
};

console.log(anna.doIt());
console.log(name.doIt());
