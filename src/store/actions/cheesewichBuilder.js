import { BUILDER_ACTIONS } from './actionTypes';

export const addIngredient = (ingName) => {
    return {
        type: BUILDER_ACTIONS.ADD_INGREDIENT,
        ingredientName: ingName,
    };
};

export const nixIngredient = (ingName) => {
    return {
        type: BUILDER_ACTIONS.NIX_INGREDIENT,
        ingredientName: ingName,
    };
};

export const setFetchIngredientError = () => {
    return {
        type: BUILDER_ACTIONS.FETCH_INGREDIENTS_FAILED,
        error: true,
    };
};

export const setIngredients = (fetchedIngredients) => {
    return {
      type: BUILDER_ACTIONS.SET_INGREDIENTS,
      ingredients: fetchedIngredients,
    };
};

export const initIngredients = () => {
    return {
        type: BUILDER_ACTIONS.FETCH_INGREDIENTS_INIT,
    };
};
