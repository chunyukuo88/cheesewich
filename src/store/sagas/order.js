import axios from '../../axios-orders';
import { put } from 'redux-saga/effects';
import * as actions from '../actions/order';



export function* fetchOrdersSaga(action){
    yield put(actions.fetchOrdersStart());
    //The `orderBy` and `equalTo` query parameters are specific to this particular back end:
    const queryParams = yield `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
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
