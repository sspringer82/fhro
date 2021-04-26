type Todo = {
  id: number;
  title: string;
  done: boolean;
};

type InputTodo = Omit<Todo, 'id'>;

// type InputTodo = {
//   title: string;
//   done: boolean;
// };

function create(todo: InputTodo): Todo {
  // server magic
  const newTodo = { ...todo, id: Math.random() };
  return newTodo;
}
