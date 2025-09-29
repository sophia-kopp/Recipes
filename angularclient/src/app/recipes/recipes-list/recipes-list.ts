import {Component, inject} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {MatDialog} from '@angular/material/dialog';
import {NewRecipeDialog} from '../new-recipe-dialog/new-recipe-dialog';
import {RecipeDetailCard} from '../recipe-detail-card/recipe-detail-card';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-recipes-list',
  imports: [
    RecipeDetailCard,
    AsyncPipe
  ],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {

  recipeService = inject(RecipeService);
  recipes = this.recipeService.getAllRecipes();
  protected dialog = inject(MatDialog);

  openNewRecipeDialog() {
    this.dialog.open(NewRecipeDialog);
  }
}
