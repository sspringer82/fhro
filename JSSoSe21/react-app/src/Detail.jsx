import { useContext, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { PersonContext } from './PersonContext';

const Detail = () => {
  const [persons, setPersons] = useContext(PersonContext);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPersons((oldPersons) => {
        const p = [...oldPersons];
        p[0].firstname = 'Klaus-Rüdiger';
        return p;
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  });

  const { id } = useParams();
  const person = persons.find((p) => p.id === parseInt(id, 10));

  return (
    <div>
      {person.firstname} {person.lastname}
      <Link to="/list">zurück zur Liste</Link>
    </div>
  );
};

export default Detail;
