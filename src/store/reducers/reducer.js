import {ADD_INGREDIENT, NIX_INGREDIENT} from "../actions/actionTypes";

const initialState = {
    ingredients: {
        cheese: 0,
        shallots: 0,
        bacon: 0,
        mustard: 0,
    },
    price: 0,
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
        default: return state;
    }
};

export default reducer;
