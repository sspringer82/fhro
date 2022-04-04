import { Module } from '@nestjs/common';
import { RecipeController } from './recipe/recipe.controller';
import { RecipeService } from './recipe/recipe.service';

@Module({
  controllers: [RecipeController],
  providers: [RecipeService]
})
export class RecipeModule {}
