type AnimalTypes = 'dog' | 'cat' | 'turtle';

interface Animal {
  name: string;
  age: number;
  type: AnimalTypes;
}

const brutus: Animal = {
  name: 'brutus der schreckliche',
  age: 0.5,
  type: 'dog',
};

class Dog implements Animal {
  type: AnimalTypes = 'dog';

  constructor(public name: string, public age: number) {}
}

function feed(animal: Animal): void {
  console.log('my dear ' + animal.name + ' here you got some food');
}

feed(brutus);

feed({ name: 'mimi', age: 14, type: 'cat' });

type MyType = {
  name: string;
};

interface MyInterface {
  name: string;
}
interface MyInterface {
  age: number;
}
