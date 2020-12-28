export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const NIX_INGREDIENT = 'NIX_INGREDIENT';

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
