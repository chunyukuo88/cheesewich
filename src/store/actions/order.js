import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const purchaseCheesewichSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_CHEESEWICH_SUCCESS,
        orderId: id,
        orderData: orderData,
    };
};

export const purchaseCheesewichFailed = (error) => {
    return {
        type: actionTypes.PURCHASE_CHEESEWICH_FAILED,
        error: error,
    };
};

export const purchaseCheesewichStart = () => {
    return {
        type: actionTypes.PURCHASE_CHEESEWICH_START,
    };
};

export const purchaseCheesewich = (orderData) => {
    return dispatch => {
        dispatch(purchaseCheesewichStart());
        axios.post( '/orders.json', orderData )
            .then( response => {
                console.log(response.data);
                dispatch(purchaseCheesewichSuccess(response.data, orderData));
            } )
            .catch( error => {
                dispatch(purchaseCheesewichFailed(error));
            } );
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT,
    };
};
