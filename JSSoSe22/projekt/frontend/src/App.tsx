import { useEffect, useState } from 'react';
import { isJwtExpired } from 'jwt-check-expiration';
import './App.css';

type Recipe = {
  _id: string;
  name: string;
  description: string;
};

function App() {
  const [error, setError] = useState(false);
  const [token, setToken] = useState('');
  const [login, setLogin] = useState({ username: '', password: '' });
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    if (token !== '') {
      localStorage.setItem('token', token);
      console.log(isJwtExpired(token));
      fetch('http://localhost:3000/recipes', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setRecipes(data));
    }
  }, [token]);

  function handleChange(e: any) {
    setLogin((prevLogin) => ({
      ...prevLogin,
      [e.target.name]: e.target.value,
    }));
  }

  async function doLogin(e: any) {
    e.preventDefault();
    const response = await fetch('http://localhost:3000/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify(login),
    });
    if (response.ok) {
      const data = await response.text();
      setToken(data);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (token === '') {
    return (
      <form onSubmit={doLogin}>
        {error && <div>You FAILED!🙈</div>}
        Username:{' '}
        <input
          type="text"
          value={login.username}
          onChange={handleChange}
          name="username"
        />
        Password:{' '}
        <input
          type="password"
          value={login.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">anmelden</button>
      </form>
    );
  } else {
    return (
      <div>
        {recipes.map((recipe) => (
          <div key={recipe._id}>
            {recipe.name} {recipe.description.substring(0, 10)}...
          </div>
        ))}
      </div>
    );
  }
}

export default App;
