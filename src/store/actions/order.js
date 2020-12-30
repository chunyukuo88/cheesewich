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

export const purchaseCheesewichStart = (orderData) => {
    return dispatch => {
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
