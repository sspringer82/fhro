import React, { useState } from 'react';
import './Lights.css';
import Button from './Button';

const Lights: React.FC = () => {
  const [state, setState] = useState({
    red: true,
    green: false,
    title: 'foo',
  });

  function handleChange() {
    setState((prevState) => {
      if (prevState.red) {
        return {
          red: false,
          green: true,
          title: 'turn red',
        };
      } else {
        return {
          red: true,
          green: false,
          title: 'turn green',
        };
      }
    });
  }

  return (
    <div className="container">
      <div className="lights">
        <div className={state.red ? 'red' : ''}></div>
        <div></div>
        <div className={state.green ? 'green' : ''}></div>
      </div>
      <Button onChange={handleChange} title={state.title}></Button>
    </div>
  );
};

export default Lights;
