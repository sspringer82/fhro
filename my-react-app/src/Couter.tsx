import React, { useState, useEffect } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setCount((prevState) => prevState + 1);
    }, 1000);
    return () => {
      console.log('clear the interval');
      clearInterval(i);
    };
  }, []);

  return <div>current value: {count}</div>;
};

export default Counter;
