import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  public recipes: Recipe[];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService
      .getAll()
      .subscribe((recipes: Recipe[]) => (this.recipes = recipes));
  }
}
