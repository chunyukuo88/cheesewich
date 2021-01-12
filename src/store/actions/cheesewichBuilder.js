import { ING_ACTIONS } from './actionTypes';
import urls from '../../urls';
import axios from '../../axios-instance';

export const addIngredient = (ingName) => {
    return {
        type: ING_ACTIONS.ADD_INGREDIENT,
        ingredientName: ingName
    };
};

export const nixIngredient = (ingName) => {
    return {
        type: ING_ACTIONS.NIX_INGREDIENT,
        ingredientName: ingName
    };
};

export const setFetchIngredientError = () => {
    return {
        type: ING_ACTIONS.FETCH_INGREDIENTS_FAILED,
        error: true
    };
};

export const setIngredients = (fetchedIngredients) => {
    return {
      type: ING_ACTIONS.SET_INGREDIENTS,
      ingredients: fetchedIngredients
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
