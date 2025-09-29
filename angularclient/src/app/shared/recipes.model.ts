type RecipeDTO = {
  title: string;
  ingredients: Ingredient[];
  preparation: string;
  favourite?: boolean;
  comments?: string[];
}
type Recipe = {
  id: string
  title: string;
  ingredients: Ingredient[];
  preparation: string;
  favourite?: boolean;
  comments?: string[];
}

