import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input()
  public recipe: Recipe = {
    id: '',
    title: '',
    ingredients: '',
    instructions: '',
    created: 0,
  };
  @Output() saved = new EventEmitter();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  save() {
    this.recipeService.save(this.recipe).subscribe(() => {
      this.saved.emit();
    });
  }
}
