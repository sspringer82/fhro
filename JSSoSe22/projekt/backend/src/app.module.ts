import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeModule } from './recipe/recipe.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [RecipeModule, MongooseModule.forRoot('mongodb://localhost/rsc'), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
