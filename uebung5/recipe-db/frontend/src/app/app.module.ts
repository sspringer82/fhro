import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { RecipeService } from './recipe.service';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, ListComponent, ListItemComponent, DetailComponent, FormComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [RecipeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
