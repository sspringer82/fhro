class U {
  constructor(public firstname: string, public lastname: string) {}

  static lastname = 'Meier';

  public getFullname() {
    return `${this.firstname} ${this.lastname}`;
  }
}

const u = new U('Günther', U.lastname);

console.log(u.getFullname());

interface User {
  id: number;
  firstname: string;
  lastname: string;
  age?: number;
}

function greet(u: User) {
  // function greet(u: { firstname: string }) {
  console.log('Hallo ', u.firstname);
}

// greet({ firstname: 'Klaus', lastname: 'Müller', age: 42 });
// greet(u);

class Collection<T extends { id: number }> {
  constructor(public items: T[]) {}

  addItem(item: T) {
    this.items.push(item);
  }

  getItem(id: number): T | undefined {
    return this.items.find((item) => item.id === id);
  }
}

const userCollection = new Collection<User>([
  { id: 1, firstname: 'Klaus', lastname: 'MÜller' },
]);
