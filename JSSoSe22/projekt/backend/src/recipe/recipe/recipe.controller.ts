import {
  Body,
  Controller,
  Get,
  Post,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FilterBody } from 'src/filter-body.interface';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllRecipes() {
    return this.recipeService.getAllRecipes();
  }

  @Post()
  getFilteredRecipes(@Body() body: FilterBody, @Headers() headers) {
    // @Todo validate body
    return this.recipeService.getFilteredRecipes(body);
  }
}
