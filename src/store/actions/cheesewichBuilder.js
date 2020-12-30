import { ADD_INGREDIENT,
        NIX_INGREDIENT,
        SET_INGREDIENTS,
        FETCH_INGREDIENTS_FAILED } from './actionTypes';
import urls from '../../urls';
import axios from '../../axios-instance';

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

export const setFetchIngredientError = () => {
    return {
        type: FETCH_INGREDIENTS_FAILED,
        error: true
    };
};

export const setIngredients = (ingredients) => {
    return {
      type: SET_INGREDIENTS,
      ingredients: ingredients
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get(urls.firebaseIngredients)
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(setFetchIngredientError())
            });
    };
};
