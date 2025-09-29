package org.example.myrecipes.model;

import lombok.With;

import java.util.List;

@With
public record Recipe(String id,
                     String title,
                     List<Ingredient> ingredients,
                     String preparation,
                     Boolean favourite,
                     List<String> comments) {
}
