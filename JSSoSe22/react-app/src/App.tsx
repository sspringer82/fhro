import './App.css';
import List from './list/List';

function App() {
  const name = 'Klaus Müller';

  return (
    <div>
      <h1>{name + (1 + 2)}</h1>
      <List />
    </div>
  );
}

export default App;
