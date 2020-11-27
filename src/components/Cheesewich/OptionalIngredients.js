import React from 'react';
import Ingredient from './Ingredients/Ingredients.jsx';

const OptionalIngredients = (ingredientsObject) => {
    console.log('OptionalIngredients()');
    return Object.keys(ingredientsObject)
        .map(ingredientKey => {
            return _getIngredientsPerQuantity(ingredientsObject, ingredientKey);
        });
};

export const _getIngredientsPerQuantity = (ingredients, key) => {
    console.log('_getIngredientsPerQuantity()');
    return [...Array(ingredients[key])]
        .map((_, i) => {
            return _buildIngredients(key, i);
        });
};

export const _buildIngredients = (key, i) => {
    const result = <Ingredient key={key + i} type={key}/>;
    console.log('result', result);
    return result;
}

export default OptionalIngredients;