import { ORDER_ACTIONS } from './actionTypes';
import axios from '../../axios-orders';

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        //The `orderBy` and `equalTo` query parameters are specific to this particular back end:
        const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
        axios.get( `/orders.json${queryParams}` )
            .then( response => {
                const fetchedOrders = [];
                for (const key in response.data) {
                    fetchedOrders.push({
                       ...response.data[key],
                       id: key
                    });
                };
                dispatch(fetchOrdersSuccess(fetchedOrders));
            } )
            .catch( error => {
                dispatch(fetchOrdersFail(error));
            } );
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
    return dispatch => {
        dispatch(purchaseCheesewichStart());
        axios.post( `/orders.json?auth=${token}`, orderData )
            .then( response => {
                dispatch(purchaseCheesewichSuccess(response.data, orderData));
            } )
            .catch( error => {
                dispatch(purchaseCheesewichFailed(error));
            } );
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
