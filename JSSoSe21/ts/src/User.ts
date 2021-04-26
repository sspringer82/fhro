import { Person } from './Person';

export default class User extends Person {
  constructor(
    private firstname: string,
    private lastname: string,
    age: number,
  ) {
    super(age);
    console.log(this);
  }

  static create(fn: string, ln: string, age: number): User {
    return new this(fn, ln, age);
  }

  getFullname(): string {
    return `${this.firstname} ${this.lastname} (${
      this[(('a' + 'ge') as unknown) as keyof User]
    })`;
  }
}
