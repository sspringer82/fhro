import Ingredient from './Ingredient';
import './IngredientBubble.css';

type Props = {
  ingredient: Ingredient;
  onSetAmount: (id: number, amount: number) => void;
};

function IngredientBubble({ ingredient, onSetAmount }: Props) {
  return (
    <div className="ingredientBubble">
      {ingredient.image && (
        <img src={ingredient.image} height="230" width="230" />
      )}
      <h1>{ingredient.title}</h1>
      <section>{ingredient.description}</section>
      <input
        type="checkbox"
        checked={ingredient.amount > 0}
        onChange={(event) => {
          let amount = 0;
          if (event.target.checked) {
            amount = ingredient.defaultAmount;
          }
          onSetAmount(ingredient.id, amount);
        }}
      />
    </div>
  );
}

export default IngredientBubble;
