import React, { useState } from 'react';
import './App.css';
import Lights from './Lights';
import Counter from './Couter';
import User from './User';

interface Props {
  name?: string;
}

const App: React.FC = () => {
  const [show, setShow] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <div>
      <Lights />
      <div>counter: {count}</div>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        click me
      </button>
      <hr />
      {show && <Counter />}
      <button onClick={() => setShow((prevshow) => !prevshow)}>toggle</button>
      <hr />
      <User />
    </div>
  );
};

export default App;
