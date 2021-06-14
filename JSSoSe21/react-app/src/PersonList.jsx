import { useContext } from 'react';
import PersonItem from './PersonItem';
import { PersonContext } from './PersonContext';

const PersonList = () => {
  const [persons, setPersons] = useContext(PersonContext);

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
