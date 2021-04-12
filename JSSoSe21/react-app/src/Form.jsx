import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    firstname: 'Basti',
    lastname: 'Springer',
  });

  function handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    setPerson((oldPerson) => {
      return { ...oldPerson, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Saving ', person);
    fetch('http://localhost:3001/person', {
      method: 'POST',
      body: JSON.stringify(person),
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <fieldset>
        <label>
          Firstname:{' '}
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={person.firstname}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Lastname:{' '}
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={person.lastname}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button>Speichern</button>
    </form>
  );
};

export default Form;
