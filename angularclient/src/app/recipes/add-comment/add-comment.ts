import {Component, Inject, inject, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-comment',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './add-comment.html',
  styleUrl: './add-comment.css'
})
export class AddComment {
  private recipeService = inject(RecipeService)
  newComment =  new FormControl('', Validators.required);

  @Input() recipeId = '';

  constructor( @Inject(MAT_DIALOG_DATA) public id: string ) {
  }
  //@Inject(MAT_DIALOG_DATA) public id: string | undefined;

  addNewComment(){
    const selectedRecipe = this.recipeService.getRecipeById(this.id);
    if (this.newComment.value != null) {
      //selectedRecipe.comments?.push(this.newComment.value);
    }
    console.log('new comment recipe: ', selectedRecipe)
    console.log('new comment recipe: ', this.id)

    //this.recipeService.updateRecipe(selectedRecipe);
  }
}
