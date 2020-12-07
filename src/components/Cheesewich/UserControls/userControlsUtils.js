import React from 'react';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster.jsx';

export const ingredients = [
    { label: 'Shallots', type: 'shallots'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Mustard', type: 'mustard'},
];

export const getIngredientsDisplay = (props, ingredientArray) => {
    return ingredientArray.map(ingredient => {
        return (
        <QuantityAdjuster key={ingredient.label} 
                          label={ingredient.label} 
                          added={()=> props.addIngredient(ingredient.type)}
                          removed={()=> props.removeIngredient(ingredient.type)}
                          disabled={props.disabled[ingredient.type]}/>
        );
    });
};