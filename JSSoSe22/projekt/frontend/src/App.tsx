import { useEffect, useState } from 'react';
import { isJwtExpired } from 'jwt-check-expiration';
import Login from './Login/Login';
import './App.css';
import Recipes from './Recipes/Recipes';
import { Recipe } from './Recipe';

function App() {
  const [token, setToken] = useState('');

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

  if (token === '') {
    return (
      <Login onLoginSuccess={(serverToken: string) => setToken(serverToken)} />
    );
  } else {
    return <Recipes recipes={recipes} />;
  }
}

export default App;
