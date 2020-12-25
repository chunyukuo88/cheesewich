import * as actionTypes from './actions';

const initialState = {
    ingredients: null,
    price: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT: 
            return {

            };
        case actionTypes.NIX_INGREDIENT: 
            return {

            };
        default: return state;
    }
};

export default reducer;