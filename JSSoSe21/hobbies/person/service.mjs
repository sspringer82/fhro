import sqlite3 from 'sqlite3';

export default {
  db: new sqlite3.Database('./data/data.sqlite3'),
  persons: [
    {
      id: 1,
      firstname: 'Klaus',
      lastname: 'Müller',
      hobbies: 'Lesen, Schreiben, Rechnen',
    },
  ],

  async getOne(id) {
    return new Promise((resolve, reject) => {
      this.db.get('SELECT * FROM Person WHERE id = ?', id, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },

  getAll() {
    const data = new Array(500).fill({
      id: 1,
      firstname: 'Klaus',
      lastname: 'Müller',
      hobbies: 'Lesen, Schreiben, Rechnen',
    });

    return Promise.resolve(data);

    return new Promise((resolve, reject) => {
      this.db.all('SELECT * FROM Person', (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  },

  create(person) {
    const query =
      'INSERT INTO Person (firstname, lastname, hobbies) VALUES (?, ?, ?)';
    return new Promise((resolve, reject) => {
      this.db.run(
        query,
        [person.firstname, person.lastname, person.hobbies],
        function (error) {
          if (error) {
            reject(error);
          } else {
            resolve({ ...person, id: this.lastID });
          }
        },
      );
    });
  },

  update(person) {
    const query =
      'UPDATE Person SET firstname = ?, lastname = ?, hobbies = ? WHERE id = ?';
    return new Promise((resolve, reject) => {
      this.db.run(
        query,
        [person.firstname, person.lastname, person.hobbies, person.id],
        function (error) {
          if (error) {
            reject(error);
          } else {
            resolve(person);
          }
        },
      );
    });
  },

  async delete(id) {
    const person = await this.getOne(id);
    const query = 'DELETE FROM Person WHERE id = ?';
    return new Promise((resolve, reject) => {
      this.db.run(query, person.id, function (error) {
        if (error) {
          reject(error);
        } else {
          resolve(person);
        }
      });
    });
  },
};
