import { ORDER_ACTIONS } from './actionTypes';

export const fetchOrders = (token, userId) => {
    return {
        type: ORDER_ACTIONS.FETCH_ORDERS_INIT,
        token: token,
        userId: userId
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: ORDER_ACTIONS.FETCH_ORDERS_FAIL,
        error: error
    };
};

export const fetchOrdersStart = () => {
    return {
        type: ORDER_ACTIONS.FETCH_ORDERS_START,
    };
};

export const fetchOrdersSuccess = (orders) => {
    return {
        type: ORDER_ACTIONS.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};


export const purchaseCheesewich = (orderData, token) => {
    return {
        type: ORDER_ACTIONS.PURCHASE_INIT,
        orderData: orderData,
        token: token,
    };
};

export const purchaseCheesewichFailed = (error) => {
    return {
        type: ORDER_ACTIONS.PURCHASE_CHEESEWICH_FAILED,
        error: error,
    };
};

export const purchaseCheesewichStart = () => {
    return {
        type: ORDER_ACTIONS.PURCHASE_CHEESEWICH_START,
    };
};

export const purchaseCheesewichSuccess = (id, orderData) => {
    return {
        type: ORDER_ACTIONS.PURCHASE_CHEESEWICH_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseInit = () => {
    return {
        type: ORDER_ACTIONS.PURCHASE_INIT,
    };
};
