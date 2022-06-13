import { useState, FormEvent } from 'react';

type Credentials = {
  username: string;
  password: string;
};

export default function useLoginContainer() {
  const [error, setError] = useState(false);

  async function doLogin(
    credentials: Credentials,
    onLoginSuccess: (token: string) => void
  ) {
    console.log('xxx');
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(credentials),
    });
    console.log('b');
    if (response.ok) {
      console.log('c');
      const data = await response.text();
      onLoginSuccess(data);
      setError(false);
    } else {
      setError(true);
    }
  }

  return { error, doLogin };
}
