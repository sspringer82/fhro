console.log(add(2, 2)); // geht
// console.log(sub(10, 2)); // geht nicht - ReferenceError: Cannot access 'sub' before initialization

// named function
// im gesamten Scope gültig
function add(a, b) {
  return a + b;
}
const result = add(1, 2);
console.log(result);

// anonymous function
// erst ab der Zuweisung gültig
const sub = function (a, b) {
  return a - b;
};
console.log(sub(10, 5));

// IIFE - erzeugt einen neuen Function Scope
(function () {
  console.log('IIFE');
})();

console.log(add(1, 2)); // 3 => 1 + 2
console.log(add(1, 2, 3)); // 3 => 1 + 2... 3 wird ignoriert
console.log(add(1)); // NaN => 1 + undefined

// default parameter
function addTo10(a = 5, b = 10) {
  return a + b;
}
console.log(addTo10(5)); // 15
console.log(addTo10(5, 20)); // 25
console.log(addTo10(5, undefined)); // 15
console.log(addTo10(undefined, 2)); // 7 - nicht machen, bitte!

// kein rückgabewert = undefined
function divide(a, b) {
  const result = a / b;
}
console.log(divide(10, 2)); // undefined

// arrow functions

const multiply = (a, b) => {
  return a * b;
};
console.log(multiply(2, 4)); // 8
// bei nur 1 parameter sind die klammern optional
// bei nur einem Statement => rückgabewert + geschweiften klammern optional
// this = der umgebende kontext

const result2 = [1, 2, 3].map((i) => i * i);
console.log(result2);
