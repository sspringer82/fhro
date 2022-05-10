// global - var, let, const
// module - var, let, const in Verbindung mit import/export
// function - var, let, const
// block - let, const
// closure - var, let, const

let global = 'foo'; // überall verfügbar (ohne Modulsystem, alles in einer Datei) // in node global-object

// in einer Datei mit import/export
let module = 'bar'; // nur in der aktuellen Datei gültig

// function scope

function doIt() {
  let functionVar = 'myFunctionVar'; // nur innerhalb der funktion gültig, für var, let und const
  console.log(functionVar);
}
// console.log(functionVar); - ReferenceError: functionVar is not defined

// block scope - alles was {} hat

if (true) {
  const myBlock = 'bar';
  console.log(myBlock); // nur im Block verfügbar, für let und const
}
// console.log(myBlock); - ReferenceError: myBlock is not defined

try {
  const add2 = 1 + 2; // actung! block scope
} catch (e) {
  console.error(e);
}
// console.log(add2); - ReferenceError: add2 is not defined

{
  const myRealBlock = 'myRealBlock';
  console.log(myRealBlock);
}
// console.log(myRealBlock); - ReferenceError: myRealBlock is not defined

// closure - funktionsscope + der erstellende Kontext
function myFunc() {
  let value = 'Hallo Welt';
  return {
    getValue() {
      return value;
    },
    setValue(v) {
      value = v;
    },
  };
}

const obj = myFunc();
console.log(obj.getValue());
obj.setValue('Hallo Mond');
console.log(obj.getValue());
