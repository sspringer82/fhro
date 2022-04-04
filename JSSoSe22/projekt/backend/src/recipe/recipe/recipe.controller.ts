import { Body, Controller, Get, Post } from '@nestjs/common';
import { FilterBody } from 'src/filter-body.interface';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
    constructor(private readonly recipeService: RecipeService) { }

    @Get()
    getAllRecipes() {
        return this.recipeService.getAllRecipes();
    }

    @Post()
    getFilteredRecipes(@Body() body: FilterBody) {
        // @Todo validate body
        return this.recipeService.getFilteredRecipes(body);
    }
}
