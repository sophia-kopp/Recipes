import {Component, inject, input, InputSignal, Signal, signal} from '@angular/core';
import {RecipeService} from '../../recipes/recipe.service';
import {NgClass} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {toObservable} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-favourite-button',
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './favourite-button.html',
  styleUrl: './favourite-button.css'
})
export class FavouriteButton {

  recipeId = input('');
  recipe:InputSignal<Recipe |undefined> = input();
  active = signal(this.recipe()?.favourite ?? false);

  private recipeService = inject(RecipeService);

  addToFavourites() {
    this.recipeService.updateFavouriteState(this.recipeId());

  }
}
