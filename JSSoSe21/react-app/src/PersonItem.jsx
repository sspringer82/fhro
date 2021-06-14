import { Link } from 'react-router-dom';

const PersonItem = ({ person, onDelete }) => {
  return (
    <li>
      <Link
        to={`/detail/${person.id}`}
      >{`${person.firstname} ${person.lastname} - ${person.hobbies}`}</Link>
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
