"use strict";
let myVar = 'Hallo Welt';
// myVar = 42;
console.log(myVar);
const number = 42;
const bool = true;
function add(a, b) {
    return a + b;
}
// console.log(add(1)); - Expected 2 arguments, but got 1
console.log(add(1, 2));
// console.log(add(1, 2, 3));  Expected 2 arguments, but got 3
function addTo10(a, b = 10) {
    return a + b;
}
console.log(addTo10(20));
function sub(a, b) {
    if (b === undefined) {
        return a;
    }
    return a - b;
}
console.log(sub(1));
console.log(sub(2, 1));
