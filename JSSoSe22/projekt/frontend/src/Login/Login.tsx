import { Alert, Button } from '@mui/material';
import { ReactElement } from 'react';
import Input from './Input';
import useLogin from './useLogin';
import LoginIcon from '@mui/icons-material/Login';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background-color: #fcfcd2;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  onLoginSuccess: (token: string) => void;
};

function Login({ onLoginSuccess }: Props): ReactElement {
  const { doLogin, error, login, handleChange } = useLogin();
  return (
    <Container>
      {error && <Alert severity="error">☝️🧐🤌 you failed!</Alert>}
      <Form onSubmit={doLogin(onLoginSuccess)}>
        <Input
          label="Username: "
          value={login.username}
          onChange={handleChange}
          type="text"
          name="username"
        />
        <Input
          label="Password: "
          value={login.password}
          onChange={handleChange}
          type="password"
          name="password"
        />
        <Button variant="contained" type="submit" startIcon={<LoginIcon />}>
          anmelden
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
