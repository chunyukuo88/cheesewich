import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders: [],
    loading: false,
    purchaseHasBeenMade: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_CHEESEWICH_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.PURCHASE_CHEESEWICH_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId,
                purchaseHasBeenMade: true,
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
            };
        case actionTypes.PURCHASE_CHEESEWICH_FAILED:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchaseHasBeenMade: false,
            };
        default:
            return state;
    };
};

export default reducer;
