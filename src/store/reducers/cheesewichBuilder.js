import { BUILDER_ACTIONS } from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    ingredients: null,
    price: 0,
    error: false,
    cheesewichIsBeingBuilt: false
};

const INGREDIENT_PRICES = {
    crunchybits: 0.5,
    cheese: 0.4,
    marinara: 1.35,
    olives: 0.55,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUILDER_ACTIONS.ADD_INGREDIENT: return addIngredient(state, action, INGREDIENT_PRICES);
        case BUILDER_ACTIONS.NIX_INGREDIENT: return nixIngredient(state, action, INGREDIENT_PRICES);
        case BUILDER_ACTIONS.SET_INGREDIENTS: return setIngredients(state, action, initialState);
        case BUILDER_ACTIONS.FETCH_INGREDIENTS_FAILED: return updateObject(state, {error: true});
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
        cheesewichIsBeingBuilt: true,
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
        cheesewichIsBeingBuilt: true
    };
};

const setIngredients = (state, action, initialState) => {
    const updatedProperties = {
        ingredients: {
            olives: action.ingredients.olives,
            crunchybits: action.ingredients.crunchybits,
            cheese: action.ingredients.cheese,
            marinara: action.ingredients.marinara,
        },
        error: false,
        price: initialState.price,
        cheesewichIsBeingBuilt: false,
    };
    return updateObject(state, updatedProperties);
};

export default reducer;
