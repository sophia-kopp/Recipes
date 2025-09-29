import {Component, EventEmitter, inject, input, InputSignal, Output} from '@angular/core';
import {Card} from '../../shared/card/card';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {FavouriteButton} from '../../shared/favourite-button/favourite-button';
import {RecipeService} from '../recipe.service';
import {MatFabButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {NewRecipeDialog} from '../new-recipe-dialog/new-recipe-dialog';
import {AddComment} from '../add-comment/add-comment';

@Component({
  selector: 'app-recipe-detail-card',
  imports: [
    FavouriteButton,
    MatIcon,
    Card,
    MatFabButton
  ],
  templateUrl: './recipe-detail-card.html',
  styleUrl: './recipe-detail-card.css'
})
export class RecipeDetailCard {
  recipe:InputSignal<Recipe|undefined> = input();

  detailView = input(false)

  @Output() newCommentEvent = new EventEmitter<string>();

  private router = inject(Router);
  private recipeService = inject(RecipeService);

  protected recipeDialog = inject(MatDialog);
  protected commentDialog = inject(MatDialog);

  goToDetailPage(id?: string) {
    this.router.navigate(['/recipe', id]);
  }

  deleteRecipe(id:string | undefined) {
    this.recipeService.deleteRecipe(id ?? '');
    this.router.navigate(['']);
  }
  addComment(id?:string){
    this.commentDialog.open(AddComment, {id});
    this.newCommentEvent.emit(id);
  }
  goToEditRecipe(id?: string) {
    this.recipeDialog.open(NewRecipeDialog);
  }
}
