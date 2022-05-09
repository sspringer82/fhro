import { TextField } from '@mui/material';
import { ChangeEvent, ReactElement } from 'react';
import './Input.css';

type Props = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'password';
};

function Input({ label, name, value, onChange, type }: Props): ReactElement {
  return (
    <TextField
      label={label}
      variant="standard"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default Input;
