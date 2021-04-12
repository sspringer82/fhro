import { useEffect, useState } from 'react';
import PersonItem from './PersonItem';

const initialPersons = [
  {
    id: 1,
    firstname: 'Klaus',
    lastname: 'Müller',
    hobbies: 'Lesen, Schreiben, Rechnen',
  },
  {
    id: 2,
    firstname: 'Petra',
    lastname: 'Müller',
    hobbies: 'Lesen, Schreiben, Rechnen',
  },
];

async function getData() {
  const request = await fetch('http://localhost:3001/person');
  const data = await request.json();
  return data;
}

const PersonList = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    getData().then((data) => setPersons(data));
  }, []);

  async function handleDelete(id) {
    const response = await fetch('http://localhost:3001/Person/' + id, {
      method: 'DELETE',
    });
    if (response.ok) {
      setPersons((oldPersons) => {
        return oldPersons.filter((person) => person.id !== id);
      });
    }
  }
  if (persons.length === 0) {
    return <div>No data</div>;
  } else {
    return (
      <div>
        <h1>Person List:</h1>
        <ul>
          {persons.map((person) => (
            <PersonItem
              key={person.id}
              person={person}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    );
  }
};
export default PersonList;
