package org.example.myrecipes.controller;

import org.example.myrecipes.model.Ingredient;
import org.example.myrecipes.model.Recipe;
import org.example.myrecipes.repository.RecipeRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.WebApplicationType;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@AutoConfigureMockMvc
class RecipeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RecipeRepo repo;

    @Test
    void getAllRecipes() throws Exception {
        Recipe recipe = new Recipe("1",
                "test12",
                Arrays.asList(new Ingredient("test", 0)),
                "test1",
                true,
                Arrays.asList("test")
        );
        repo.save(recipe);
        mockMvc.perform(MockMvcRequestBuilders.get("/api/recipes")
                        .contentType(MediaType.APPLICATION_JSON))
                        .andExpect(MockMvcResultMatchers.status().isOk())
                        .andExpect(MockMvcResultMatchers.content().json(
                                """
                                        [{
                                                        "title": "test12",
                                                         "ingredients": [{"name": "name", "amount": 0}],
                                                         "preparation": "test1",
                                                         "favourite": true,
                                                         "comments": ["test"]
                                                }
                                        ]
                                        """
                        ));
    }

    @Test
    void getRecipeById() {
    }

    @Test
    void addNewRecipe() {
    }

    @Test
    void updateExistingRecipe() {
    }

    @Test
    void deleteRecipe() {
    }
}