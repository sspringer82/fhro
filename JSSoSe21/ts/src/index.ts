import User from './User';

interface NamedOne {
  getFullname: () => string;
}

// type NamedOne = {
//   getFullname: () => string;
// };

function greet(obj: NamedOne) {
  // function greet(obj: { getFullname: () => string }) {
  console.log(`Hallo ${obj.getFullname()}`);
}

const agnes = new User('Agnes', 'Schmitt', 14);
// console.log(agnes.firstname);
const rüdi = User.create('Rüdiger', 'Meier', 52);
console.log(rüdi.getFullname());

greet(agnes);
greet(rüdi);
