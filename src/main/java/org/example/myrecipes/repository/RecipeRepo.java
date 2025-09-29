package org.example.myrecipes.repository;

import org.example.myrecipes.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecipeRepo extends MongoRepository<Recipe,String> {
}
