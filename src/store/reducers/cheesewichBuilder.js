import { ADD_INGREDIENT,
        NIX_INGREDIENT,
        SET_INGREDIENTS,
        FETCH_INGREDIENTS_FAILED } from '../actions/actionTypes';
import { updateObject } from '../utils';

const initialState = {
    ingredients: null,
    price: 0,
    error: false
};

const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    mustard: 1.35,
    shallots: 0.55,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT: return addIngredient(state, action, INGREDIENT_PRICES);
        case NIX_INGREDIENT: return nixIngredient(state, action, INGREDIENT_PRICES);
        case SET_INGREDIENTS: return setIngredients(state, action, initialState);
        case FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
        default: return state;
    }
};

const addIngredient = (state, action, INGREDIENT_PRICES) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        price: state.price + INGREDIENT_PRICES[action.ingredientName],
    };
};

const nixIngredient = (state, action, INGREDIENT_PRICES) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        price: state.price - INGREDIENT_PRICES[action.ingredientName],
    };
};

const setIngredients = (state, action, initialState) => {
    const updatedProperties = {
        ingredients: action.ingredients,
        error: false,
        price: initialState.price
    };
    return updateObject(state, updatedProperties);
};

export default reducer;
