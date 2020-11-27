import React from 'react';
import Ingredient from './Ingredients/Ingredients.jsx';

export const OptionalIngredients = (ingredientsObject) => {
    const result = Object.keys(ingredientsObject)
        .map(ingredientKey => {
            return _buildArrayOfSingleIngredient(ingredientsObject, ingredientKey);
        });
    console.log('result: ', result);
    return result;
};

export const _buildArrayOfSingleIngredient = (ingredients, key) => {
    const result = [...Array(ingredients[key])]
        .map((_, i) => {
            return _buildIngredient(key, i);
        });
    return result;
};

export const _buildIngredient = (key, i) => {
    const result = <Ingredient key={key + i} type={key}/>;
    return result;
};