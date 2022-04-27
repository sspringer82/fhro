import { useState } from 'react';
import './Info.css';
import Ingredient from './Ingredient';
import IngredientBubble from './IngredientBubble';

const initialIngredients: Ingredient[] = [
  {
    id: 1,
    title: 'Eier',
    unit: 'x',
    amount: 3,
    description: 'mit wichtigem Vitamin A, D, E und verschiedenen B-Vitaminen',
    image: 'Ei.png',
    defaultAmount: 1,
  },
  { id: 2, title: 'Nudeln', unit: 'g', amount: 500, defaultAmount: 500 },
  { id: 3, title: 'Tomatensoße', unit: 'ml', amount: 500, defaultAmount: 500 },
  {
    id: 4,
    title: 'Kopfsalat',
    unit: 'x',
    amount: 0,
    description: 'einer der verbreitetsten und beliebtesten Salatsorten',
    image: 'Salat.png',
    defaultAmount: 1,
  },
];

function Info() {
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(initialIngredients);

  function setAmount(ingredientId: number, amount: number) {
    setIngredients((currentState) => {
      return currentState.map((ingredient) => {
        if (ingredient.id === ingredientId) {
          ingredient.amount = amount;
        }
        return ingredient;
      });
    });
  }

  return (
    <div className="info">
      <div className="background"></div>
      <h1 className="header">Wähle deine Zutaten</h1>
      <section>
        Wähle alle Lebensmittel aus, die du bei dir Zuhause findest. Du wirst
        überrascht sein, welche leckeren Gerichte du damit zubereiten kannst.
      </section>
      <h2>Deine Auswahl:</h2>
      <ul>
        {ingredients
          .filter((ingredient) => ingredient.amount > 0)
          .map((ingredient) => (
            <li>{`${ingredient.amount}${ingredient.unit} ${ingredient.title}`}</li>
          ))}
      </ul>

      <div className="ingredientBubbles">
        {ingredients.map((ingredient) => (
          <IngredientBubble
            ingredient={ingredient}
            onSetAmount={setAmount}
            key={ingredient.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Info;
