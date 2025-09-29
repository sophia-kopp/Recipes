package org.example.myrecipes.exceptions;

public class NoRecipeWithThisIdException extends RuntimeException {
    public NoRecipeWithThisIdException(String message) {
        super(message);
    }
}
