package org.example.myrecipes.DTO;

import org.example.myrecipes.model.Ingredient;

import java.util.List;

public record RecipeDto(String title,
                        List<Ingredient> ingredients,
                        String preparation,
                        Boolean favourite,
                        List<String> comments) {
}
