type Ingredient = {
  id: number;
  title: string;
  unit: string;
  amount: number;
  description?: string;
  image?: string;
  defaultAmount: number;
};

export default Ingredient;
