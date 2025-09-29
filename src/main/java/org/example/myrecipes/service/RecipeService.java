package org.example.myrecipes.service;

import org.example.myrecipes.DTO.RecipeDto;
import org.example.myrecipes.exceptions.NoRecipeWithThisIdException;
import org.example.myrecipes.model.Recipe;
import org.example.myrecipes.repository.RecipeRepo;
import org.example.myrecipes.service.IdService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepo repo;
    private final IdService idService;

    public RecipeService(RecipeRepo repo, IdService idService) {
        this.repo = repo;
        this.idService = idService;
    }

    public List<Recipe> getAllRecipes() {
       return repo.findAll();
    }

    public Recipe getRecipeById(String id) {
        return repo.findById(id).orElseThrow(()->
                new NoRecipeWithThisIdException
                        ("No Recipe found with id: " + id));
    }

    public Recipe addNewRecipe(RecipeDto recipeDto) {
        Recipe recipe = new Recipe(idService.getUUid(),
                recipeDto.title(),
                recipeDto.ingredients(),
                recipeDto.preparation(),
                recipeDto.favourite(),
                recipeDto.comments());
        repo.save(recipe);
        return recipe;
    }

    public Recipe updateExistingRecipe(String id, RecipeDto recipeDto) {
        Optional<Recipe> oldRecipe = repo.findById(id);
        if(recipeDto != null){
            Recipe newRecipe = oldRecipe.get()
                    .withTitle(recipeDto.title())
                    .withIngredients(recipeDto.ingredients())
                    .withPreparation(recipeDto.preparation())
                    .withFavourite(recipeDto.favourite())
                    .withComments(recipeDto.comments());
            return repo.save(newRecipe);
        } else {
            throw new NoRecipeWithThisIdException("No Recipe found with id: " + id);
        }
    }

    public void deleteRecipe(String id) {
        repo.deleteById(id);
    }
}
