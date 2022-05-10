class Person {
  private age: number;
  constructor(
    private firstname: string,
    private lastname: string,
    age: number
  ) {
    this.age = age;
  }

  private get fullname(): string {
    return `${this.firstname} ${this.lastname}`;
  }

  getFormattedName(): string {
    return `${this.fullname} (${this.age})`;
  }

  print() {
    console.log(this.getFormattedName());
  }
}

const uli: Person = new Person('Uli', 'Conditor', 26);
uli.print();

function greet(p: Person): string {
  return `Hallo ${p.getFormattedName()}`;
}
