const data = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Doe!',
  },
  {
    id: 2,
    firstname: 'Jane',
    lastname: 'Doe',
  },
];

class AddressCollection {
  constructor(initial) {
    this.data = initial;
  }

  getOne(id) {
    return this.data.find((address) => address.id === id);
  }

  getAll() {
    return this.data;
  }
  create(data) {
    this.data.push(data);
  }
}

module.exports = new AddressCollection(data);
