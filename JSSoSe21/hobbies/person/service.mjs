export default {
  persons: [
    {
      id: 1,
      firstname: 'Klaus',
      lastname: 'Müller',
      hobbies: 'Lesen, Schreiben, Rechnen',
    },
  ],

  async getOne(id) {
    return this.persons.find((person) => person.id === id);
  },

  async getAll() {
    return this.persons;
  },

  async create(person) {
    const id = Math.max(...this.persons.map((person) => person.id)) + 1;
    person.id = id;
    this.persons.push(person);
    return person;
  },

  async update(person) {
    const index = this.persons.findIndex(
      (existingPersons) => existingPersons.id === person.id,
    );
    this.persons[index] = person;
    return person;
  },

  async delete(id) {
    const deletedPerson = this.persons.find((person) => person.id === id);
    this.persons = this.persons.filter((person) => person.id !== id);
    return deletedPerson;
  },
};
