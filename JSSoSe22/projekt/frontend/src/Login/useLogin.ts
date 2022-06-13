import { useState, ChangeEvent } from 'react';

type Credentials = {
  username: string;
  password: string;
};

function useLogin() {
  const [login, setLogin] = useState<Credentials>({
    username: '',
    password: '',
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setLogin((prevLogin) => ({
      ...prevLogin,
      [event.target.name]: event.target.value,
    }));
  }

  return {
    login,
    handleChange,
  };
}

export default useLogin;
