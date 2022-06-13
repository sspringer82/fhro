import { TextField } from '@mui/material';
import { ChangeEvent, ReactElement } from 'react';
import './Input.css';

type Props = {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  type: 'text' | 'password';
  testId: string;
};

function Input({
  label,
  name,
  value,
  onChange,
  type,
  testId,
}: Props): ReactElement {
  return (
    <TextField
      label={label}
      variant="standard"
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      inputProps={{ 'data-testid': testId }}
    />
  );
}

export default Input;
