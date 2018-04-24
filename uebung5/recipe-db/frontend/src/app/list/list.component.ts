import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';
import { map } from 'rxjs/operators/map';
import { RecursiveTemplateAstVisitor } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public recipes: Recipe[];

  public detail?: Recipe;

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService
      .getAll()
      .pipe(
        map((recipes: Recipe[]): Recipe[] => {
          return recipes.map((recipe: Recipe) => {
            recipe.ingredients = recipe.ingredients
              .split('--')
              .slice(0, 3)
              .join('--');
            return recipe;
          });
        }),
      )
      .subscribe((recipes: Recipe[]) => (this.recipes = recipes));
  }

  handleDetailSelect(recipe: Recipe) {
    this.detail = recipe;
  }
}
