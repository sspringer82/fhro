class Collection<T extends { id: number }> {
  constructor(private items: T[]) {}

  setItem(item: T): void {
    this.items.push(item);
  }

  getItem(key: number): T {
    return this.items[key];
  }

  hasItem(item: T): boolean {
    return this.items.find((i) => i.id === item.id) !== undefined;
  }
}

type Car = {
  id: number;
  make: string;
  model: string;
};

const a5 = {
  id: 1,
  make: 'Audi',
  model: 'A5',
};
const mustang = {
  id: 2,
  make: 'Ford',
  model: 'Mustang',
};

const cars = new Collection<Car>([a5, mustang]);
console.log(cars.hasItem(mustang));
cars.setItem({ id: 3, make: 'vw', model: 'golf' });
console.log(cars.getItem(2));
