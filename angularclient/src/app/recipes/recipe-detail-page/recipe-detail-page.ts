import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';
import {RecipeDetailCard} from '../recipe-detail-card/recipe-detail-card';
import {toSignal} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-recipe-detail-page',
  imports: [
    RecipeDetailCard
  ],
  templateUrl: './recipe-detail-page.html',
  styleUrl: './recipe-detail-page.css'
})
export class RecipeDetailPage {
  private router = inject(Router)
  private recipeService = inject(RecipeService);

  private recipeID = this.router.url.split('/')[2];
  recipe = toSignal(this.recipeService.getRecipeById(this.recipeID));

}
