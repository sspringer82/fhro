import { useEffect, useState } from 'react';
import ListItem from './ListItem';
import Person from './Person';

const initialPeople: Person[] = [];
function List() {
  // if (people.length === 0) {
  //   return <div>Keine Daten vorhanden</div>;
  // }

  // useEffect(() => {
  //   // setPeople((currentState) => {
  //   //   return [...currentState, 'Klaus'];
  //   // });
  //   fetch('http://localhost:3002/people')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setPeople(data);
  //     });
  // }, []);

  const [people, setPeople] = useState<Person[]>(initialPeople);

  function handleDelete(who: number) {
    fetch('http://localhost:3002/people/' + who, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setPeople((currentState) => {
          const clone = [...currentState];
          const whoIndex = clone.findIndex((p) => p.id === who);
          clone.splice(whoIndex, 1);
          return clone;
        });
      }
    });
  }

  return (
    <div>
      {people.length === 0 ? (
        <div>Keine Daten vorhanden</div>
      ) : (
        <ul>
          {people.map((person) => {
            return (
              <ListItem
                key={person.id}
                person={person}
                onDelete={handleDelete}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default List;
