import { ORDER_ACTIONS } from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    orders: [],
    loading: false,
    purchaseHasBeenMade: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_ACTIONS.PURCHASE_CHEESEWICH_START:
            return updateObject(state, {loading: true});
        case ORDER_ACTIONS.PURCHASE_CHEESEWICH_SUCCESS:
            return purchaseCheesewichSuccess(state, action)
        case ORDER_ACTIONS.PURCHASE_CHEESEWICH_FAILED:
            return updateObject(state, {loading: false});
        case ORDER_ACTIONS.PURCHASE_INIT:
            return updateObject(state, {purchaseHasBeenMade: false});
        case ORDER_ACTIONS.FETCH_ORDERS_START:
            return updateObject(state, {loading: true});
        case ORDER_ACTIONS.FETCH_ORDERS_SUCCESS:
            return updateObject(state, {orders: action.orders, loading: false});
        case ORDER_ACTIONS.FETCH_ORDERS_FAIL:
            return updateObject(state, {loading: false});
        default: return state;
    };
};

const purchaseCheesewichSuccess = (state, action) => {
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
};

export default reducer;
