import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/order';

export function* fetchOrdersSaga(action){
    const { token, userId } = action;
    yield put(actions.fetchOrdersStart());
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`; //The `orderBy` and `equalTo` query parameters are specific to this particular back end:
    try{
        const response = yield axios.get( `/orders.json${queryParams}` );
        const fetchedOrders = yield [];
        for (const key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        };
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (err) {
        yield put(actions.fetchOrdersFail(err));
    };
};

export function* purchaseCheesewichSaga(action){
    yield put(actions.purchaseCheesewichStart());
    try {
        const response = yield axios.post( `/orders.json?auth=${action.token}`, action.orderData );
        yield put(actions.purchaseCheesewichSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseCheesewichFailed(error));
    };
};
