import { Routes } from '@angular/router';
import {RecipesList} from './recipes/recipes-list/recipes-list';
import {RecipeDetailPage} from './recipes/recipe-detail-page/recipe-detail-page';

export const routes: Routes = [{
  path: '',
  component: RecipesList
},
  {
    path: 'recipe/:id',
    component: RecipeDetailPage
  }];
