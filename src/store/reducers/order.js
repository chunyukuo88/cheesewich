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
            const  newOrder = {
                ...action.orderData,
                id: action.orderId,
            };
            return {
                ...state,
                loading: false,
                orders: state.orders.concat(newOrder),
                purchaseHasBeenMade: true,
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
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.orders,
                loading: false
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    };
};

export default reducer;
