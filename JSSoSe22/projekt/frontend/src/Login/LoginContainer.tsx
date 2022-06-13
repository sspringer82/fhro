import { ReactElement } from 'react';
import Login from './Login';
import useLoginContainer from './useLoginContainer';

type Props = {
  onLoginSuccess: (token: string) => void;
};

function LoginContainer({ onLoginSuccess }: Props): ReactElement {
  const { error, doLogin } = useLoginContainer();

  return (
    <Login
      onLogin={(credentials) => {
        doLogin(credentials, onLoginSuccess);
      }}
      error={error}
    />
  );
}

export default LoginContainer;
