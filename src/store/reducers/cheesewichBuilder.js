import { ADD_INGREDIENT,
        NIX_INGREDIENT,
        SET_INGREDIENTS,
        FETCH_INGREDIENTS_FAILED } from '../actions/actionTypes';
import * as utils from '../utils';

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
            return utils.addIngredient(state, action, INGREDIENT_PRICES);
        case NIX_INGREDIENT:
            return utils.nixIngredient(state, action, INGREDIENT_PRICES);
        case SET_INGREDIENTS:
            return utils.setIngredients(state, action, initialState);
        case FETCH_INGREDIENTS_FAILED:
            return utils.updateObject(state, {error: true});
        default: return state;
    }
};

export default reducer;
