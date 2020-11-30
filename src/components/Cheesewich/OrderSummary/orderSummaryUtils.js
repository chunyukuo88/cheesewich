import React from 'react';

export const _getSummaryItem = (ingrsObject, ingr) => {
    return (
        <li key={ingr}>
            {ingr}: {ingrsObject[ingr]}
        </li>
    );
};

export const _getIngredientSummary = ingredients => {
    return Object.keys(ingredients)
                 .map(ingredient => {
                    return _getSummaryItem(ingredients, ingredient);
                 });
}