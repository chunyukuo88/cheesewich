import { ADD_INGREDIENT,
        NIX_INGREDIENT,
        SET_INGREDIENTS,
        FETCH_INGREDIENTS_FAILED } from '../actions/actionTypes';

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
        case ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                },
                price: state.price + INGREDIENT_PRICES[action.ingredientName],
            };
        case NIX_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                },
                price: state.price - INGREDIENT_PRICES[action.ingredientName],
            };
        case SET_INGREDIENTS:
            return {
                ...state,
                ingredients: action.ingredients,
                error: false,
                price: initialState.price
            };
        case FETCH_INGREDIENTS_FAILED:
            return {
                ...state,
                error: true,
            };
        default: return state;
    }
};

export default reducer;
