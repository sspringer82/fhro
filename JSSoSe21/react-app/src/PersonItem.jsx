const PersonItem = ({ person, onDelete }) => {
  return (
    <li>
      {`${person.firstname} ${person.lastname} - ${person.hobbies}`}
      <button
        onClick={() => {
          onDelete(person.id);
        }}
      >
        löschen
      </button>
    </li>
  );
};

export default PersonItem;
