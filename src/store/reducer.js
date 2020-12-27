import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        cheese: 0,
        shallots: 0,
        bacon: 0,
        mustard: 0,
    },
    price: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: 
            return {    
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
                }, 
            };
        case actionTypes.NIX_INGREDIENT: 
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
                }, 
            };
        default: return state;
    }
};

export default reducer;