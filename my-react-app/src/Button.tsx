import React from 'react';
import './Button.css';

interface Props {
  onChange: () => void;
  title: string;
}

const Button: React.FC<Props> = ({ onChange, title }) => {
  console.log('button render');
  return <button onClick={() => onChange()}>{title}</button>;
};

export default Button;
