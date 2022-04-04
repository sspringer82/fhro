import { Ingredient } from "./ingredient.interface";

export interface Recipe {
    id: number;
    name: string;
    description: string;
    ingredients: Array<{ ingredient: Ingredient, amount: number }>;
}

