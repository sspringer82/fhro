import { useState, FormEvent, ChangeEvent } from 'react';

function useLogin() {
  const [login, setLogin] = useState({ username: '', password: '' });
  const [error, setError] = useState(false);

  function doLogin(onLoginSuccess: (token: string) => void) {
    return async function (e: FormEvent) {
      e.preventDefault();
      const response = await fetch('http://localhost:3000/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(login),
      });
      if (response.ok) {
        const data = await response.text();
        onLoginSuccess(data);
        setError(false);
      } else {
        setError(true);
      }
    };
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLogin((prevLogin) => ({
      ...prevLogin,
      [event.target.name]: event.target.value,
    }));
  }

  return {
    doLogin,
    error,
    login,
    handleChange,
  };
}

export default useLogin;
