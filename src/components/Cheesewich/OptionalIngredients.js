import React from 'react';
import Ingredient from './Ingredients/Ingredients.jsx';

export const OptionalIngredients = ingredientsObject => {
    console.log(ingredientsObject)
    return Object.keys(ingredientsObject)
        .map(ingredientKey => buildArrayOfSingleIngredient(ingredientsObject, ingredientKey));
};

const buildArrayOfSingleIngredient = (ingredients, key) => {
    return [...Array(ingredients[key])]
        .map((_, i) => buildIngredient(key, i));
};

const buildIngredient = (key, i) => <Ingredient key={key + i} type={key}/>;

export const checkForIngredients = (ingredientsArray, ingredients) => {
    if (ingredientsArray.length === 0) ingredients = <div>Start adding the good stuff!</div>;
    return ingredients;
}

export const reduceIngredients = ingredients => {
    return ingredients.reduce((array, element)=>{
        return array.concat(element);
    }, []);
};
