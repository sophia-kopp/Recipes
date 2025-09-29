import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-new-recipe-dialog',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-recipe-dialog.html',
  styleUrl: './new-recipe-dialog.css'
})
export class NewRecipeDialog {
  recipeService = inject(RecipeService);

  newRecipeForm = new FormGroup({
    title: new FormControl(''),
    ingredient: new FormControl(''),
    ingredientAmount: new FormControl(''),
    preparation: new FormControl(''),
  });

  onSubmitNewRecipe() {
    const newRecipe: RecipeDTO= {
      title: this.newRecipeForm.value.title ?? '',
      ingredients: [{name: this.newRecipeForm.value.ingredient ?? '',
        amount: parseInt(this.isNumber(this.newRecipeForm.value.ingredientAmount) ?? '0')
    }],
      preparation: this.newRecipeForm.value.preparation ?? '',
      favourite: false,
      comments:[]
    }
    this.recipeService.createNewRecipe(newRecipe);
  }

  onCancel(){}

  generateNewId(){
    //return this.recipeService.getAllRecipes().length +1;
  }
  isNumber(input : string |undefined |null){
  if(input == null){
    return null;
  } else {

    return input.match("[0-9]*") ? input : null;
  }
}
}
