import { ADD_INGREDIENT, NIX_INGREDIENT } from './actionTypes';

export const addIngredient = (ingName) => {
    return {
        type: ADD_INGREDIENT,
        ingredientName: ingName
    };
};

export const nixIngredient = (ingName) => {
    return {
        type: NIX_INGREDIENT,
        ingredientName: ingName
    };
};
