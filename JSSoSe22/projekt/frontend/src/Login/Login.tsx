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
  error: boolean;
  onLogin: (credentials: { username: string; password: string }) => void;
};

function Login({ onLogin, error }: Props): ReactElement {
  const { login, handleChange } = useLogin();
  return (
    <Container>
      {error && (
        <Alert severity="error" data-testid="error-banner">
          ☝️🧐🤌 you failed!
        </Alert>
      )}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          onLogin(login);
        }}
      >
        <Input
          label="Username: "
          value={login.username}
          onChange={handleChange}
          type="text"
          name="username"
          testId="username"
        />
        <Input
          label="Password: "
          value={login.password}
          onChange={handleChange}
          type="password"
          name="password"
          testId="password"
        />
        <Button
          variant="contained"
          type="submit"
          startIcon={<LoginIcon />}
          data-testid="submit-btn"
        >
          anmelden
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
