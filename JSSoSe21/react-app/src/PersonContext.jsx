import React, { useEffect, useState } from 'react';

export const PersonContext = React.createContext([]);

const initialPs = [
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

const PersonProvider = ({ children }) => {
  useEffect(() => {
    getData().then((data) => setPersons(data));
  }, []);
  const [persons, setPersons] = useState(initialPs);

  return (
    <PersonContext.Provider value={[persons, setPersons]}>
      {children}
    </PersonContext.Provider>
  );
};
export default PersonProvider;
