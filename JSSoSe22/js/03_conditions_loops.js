// if

const age = 100;
if (age < 43) {
  console.log('wow bist du noch jung');
} else if (age < 99) {
  console.log('da geht noch was');
} else if (age === '100') {
  // === - JS macht keine typenumwandlung / == - JS versucht den typ umzuwandeln
  console.log('🥳');
} else {
  console.log('altes mensch!');
}

// switch

const animal = 'cat';

switch (animal) {
  case 'cat':
    console.log('🐈');
    break;
  case 'dog':
    console.log('🐕');
    break;
  default:
    console.log('🧌');
    break;
}

// loops

// while 0 - n mal durchlaufen
let i = 0;
while (i < 10) {
  console.log('while loop');
  i++;
}

// do while 1 - n mal durchlaufen
let j = 0;
do {
  console.log('do while loop');
  j++;
} while (j < 10);

// for loop
for (let i = 0; i < 10; i++) {
  console.log('for loop');
}
