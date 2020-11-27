import React from 'react';
import Ingredient from './Ingredients/Ingredients.jsx';

const OptionalIngredients = (ingredientsObject) => {
    return Object.keys(ingredientsObject)
        .map(ingredientKey => {
            return [...Array(ingredientsObject[ingredientKey])]
                .map((_, i) => {
                    return <Ingredient key={ingredientKey + i} type={ingredientKey}/>
            });
        });
};

export default OptionalIngredients;