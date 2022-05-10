// variablen (alt)
var zahl = 1;
zahl = 5;
zahl = 5 + 10;
zahl = 'Hallo welt';
zahl = true;

console.log(zahl);

// variable (neu)
// let zahl = 42; //=> syntaxError cannot redeclare
let zahl2 = 42;
zahl2 = 47;
console.log(zahl2);

// konstanten - Standard! bis der Wert neu zugewiesen werden muss
const zahl3 = 42;
// zahl3 = 43; => TypeError: Assignment to constant variable
console.log(zahl3);
