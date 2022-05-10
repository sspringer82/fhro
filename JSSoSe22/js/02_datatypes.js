// primitives

// BOOLEAN
const bool = true;
const bool1 = false;

// NULL + UNDEFINED
const nix = null; // Abwesenheit eines Wertes!

const nix2 = undefined; // Abwesenheit eines Wertes! für die Engine

let foo; // immer initialisieren!
console.log(foo); // undefined
// let bar = undefined; // NICHT MACHEN! das darf nur die engine!
if (foo === undefined) {
} // erlaubt

// NUMBER
const number = 42;
const number1 = 3.15;
const number3 = 10e2;
const number4 = 0x42f;
const number5 = 045;
console.log(Number.MAX_SAFE_INTEGER + 42); // kann komische Dinge machen
const bigInt = 42n;
const bitInt2 = BigInt(42);
console.log(bigInt + BigInt(Number.MAX_SAFE_INTEGER));
const bigNumber = 1_000_000;
console.log(bigNumber);
const bigNumber2 = 1_0_0_0_0_00_0;
console.log(bigNumber2);

// STRING
const string = 'My "String"';
const string2 = "My'String'";
const string3 = `MyString ${string}`;
console.log(string3);
console.log(string.toUpperCase());

// https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/String

// SYMBOL

const symbol = Symbol('foo');
console.log(symbol); // eindeutige identifier für Object keys

// composites

// OBJECT
const user = {
  name: 'Klaus',
  lastname: 'Müller',
  getName() {
    return `${this.name} ${this.lastname}`;
  },
};
console.log(user.name);
console.log(user.getName());
const property = 'lastname';
console.log(user[property]); // => user.lastname - variabler eigenschaftszugriff

const obj = new Object(); // macht man nur nicht so oft

// ARRAY
const arr = [1, 2, 3];
console.log(arr);

const arr2 = new Array(); // macht man nur nicht so oft

const arr3 = new Array(10);
console.log(arr3); // [ <10 empty items> ]
const result = arr3.map((i) => 'foo');
console.log(result); // [ <10 empty items> ]

const arr4 = new Array(10).fill('').map((i) => 'foo');
console.log(arr4);

// primitive vs composite - byValue vs. byReference

const string4 = 'Hallo Welt';
const object = {
  name: 'Petra',
};

function doSomething(p, c) {
  // composite types werden als referenz übergeben
  p = 'Hallo Mond';
  c.name = 'Lisa';

  // objekt kopieren - ACHTUNG: flache kopie! - alternative immutable.js, immer, immutability-helper
  const clone = { ...c }; // spread operator
  clone.name = 'Claudia';
  console.log(clone);
  console.log(c);
}
doSomething(string4, object);
console.log(string4);
console.log(object);

const u2 = {
  name: 'Peter',
  address: {
    street: 'Hochschulstraße 1',
  },
};

// const u3 = { ...u2, address: { ...u2.address } };
const u3 = { ...u2 };
u3.name = 'Klaus';
u3.address.street = 'Bahnhofstraße 4';
console.log('u2: ', u2);
console.log('u3: ', u3);
