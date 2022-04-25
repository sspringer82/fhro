import Person from './Person';

type Props = {
  person: Person;
  onDelete: (who: number) => void;
};

function ListItem({ person, onDelete }: Props) {
  return (
    <li>
      {person.name}
      <button
        onClick={() => {
          onDelete(person.id);
        }}
      >
        löschen
      </button>
    </li>
  );
}

export default ListItem;
