import './App.css';
import List from './list/List';
import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Child from './Child';

export const MyContext = createContext<
  [string, Dispatch<SetStateAction<string>>]
>(['', () => {}]);

function App() {
  const [state, setState] = useState('Rüdiger');
  const name = 'Klaus Müller';

  return (
    <div>
      <MyContext.Provider value={[state, setState]}>
        <h1>{name + (1 + 2)}</h1>
        <List />
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default App;
