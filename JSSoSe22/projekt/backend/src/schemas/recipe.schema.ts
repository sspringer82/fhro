import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecipeDocument = Recipe & Document;

@Schema()
export class Recipe {
  @Prop()
  name: string;

  @Prop()
  description: string;
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
