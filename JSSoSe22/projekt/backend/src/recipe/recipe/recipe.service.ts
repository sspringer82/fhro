import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterBody } from 'src/filter-body.interface';
import { Recipe, RecipeDocument } from 'src/schemas/recipe.schema';
import { Model } from 'mongoose';

// http://localhost:3000/recipes/?ingredient[]=ei&amount[]=2&ingredient[]=ei&amount[]=2

@Injectable()
export class RecipeService {
  constructor(
    @InjectModel(Recipe.name) private recipeModel: Model<RecipeDocument>,
  ) {}

  // private recipes: Recipe[] = [
  //   {
  //     id: 1,
  //     name: 'Pizza',
  //     description:
  //       'Pizza is a savory dish of Italian origin, consisting of a usually round, flattened base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (anchovies, olives, meat, etc.) baked at a high temperature, traditionally in a wood-fired oven.',
  //     ingredients: [
  //       { ingredient: { id: 1, name: 'Tomato', unit: 'g' }, amount: 100 },
  //       { ingredient: { id: 2, name: 'Cheese', unit: 'g' }, amount: 200 },
  //       { ingredient: { id: 3, name: 'Bread', unit: 'g' }, amount: 300 },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: 'Lasagne',
  //     description:
  //       'Lasagne is a dish of Italian origin, consisting of a layer of thin unleavened bread dough, sometimes called a lasagna sheet, rolled into a long, cylindrical shape, then cooked in a variety of ways.',
  //     ingredients: [
  //       { ingredient: { id: 1, name: 'Tomato', unit: 'g' }, amount: 100 },
  //       { ingredient: { id: 2, name: 'Cheese', unit: 'g' }, amount: 200 },
  //       { ingredient: { id: 3, name: 'Noodles', unit: 'g' }, amount: 300 },
  //     ],
  //   },
  // ];

  async getFilteredRecipes(
    ingredientsAvailable: FilterBody,
  ): Promise<Recipe[]> {
    // const filteredRecipes = this.recipes.filter((recipe) => {
    //   return recipe.ingredients.every((ingredient) => {
    //     const matched = ingredientsAvailable.find(
    //       (filterIngredient) =>
    //         filterIngredient.ingredient === ingredient.ingredient.name,
    //     );
    //     return matched && matched.amount >= ingredient.amount;
    //   });
    // });
    // return filteredRecipes;
    return [];
  }

  async getAllRecipes(): Promise<Recipe[]> {
    return this.recipeModel.find();
  }
}
