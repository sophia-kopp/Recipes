package org.example.myrecipes.controller;

import org.example.myrecipes.DTO.RecipeDto;
import org.example.myrecipes.model.Recipe;
import org.example.myrecipes.service.RecipeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recipes")
@CrossOrigin(origins = "http://localhost:4200")
public class RecipeController {

    private final RecipeService service;

    public RecipeController(RecipeService service) {
        this.service = service;
    }

    @GetMapping
    public List<Recipe> getAllRecipes(){
        return service.getAllRecipes();
    }
    @GetMapping("/{id}")
    public Recipe getRecipeById(@PathVariable String id){
        return service.getRecipeById(id);
    }
    @PostMapping
    public Recipe addNewRecipe(@RequestBody RecipeDto recipeDto){
        return service.addNewRecipe(recipeDto);
    }
    @PutMapping("/{id}")
    public Recipe updateExistingRecipe(@PathVariable String id, @RequestBody RecipeDto recipeDto){
        return service.updateExistingRecipe(id, recipeDto);
    }
    @DeleteMapping("/{id}")
    public void deleteRecipe(@PathVariable String id){
        service.deleteRecipe(id);
    }
}
