import { takeEvery, takeLatest } from 'redux-saga/effects';
import { AUTH_ACTIONS, ORDER_ACTIONS, BUILDER_ACTIONS } from '../actions/actionTypes';
import { fetchOrdersSaga, purchaseCheesewichSaga } from './order';
import { authCheckStateSaga,
        authenticateUserSaga,
        checkAuthTimeoutSaga,
        logoutSaga } from './auth';
import initIngredientsSaga from './cheesewichBuilder';


export function* watchAuth() {
    //TODO: Change this back to `yield all` instead once I figure out how to unit test `yield all`.
    yield takeEvery(AUTH_ACTIONS.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_USER, authenticateUserSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_CHECK_STATE, authCheckStateSaga);
};

export function* watchBuilder() {
    yield takeEvery(BUILDER_ACTIONS.FETCH_INGREDIENTS_INIT, initIngredientsSaga);
};

export function* watchOrder() {
    yield takeLatest(ORDER_ACTIONS.FETCH_ORDERS_INIT, fetchOrdersSaga);
    yield takeEvery(ORDER_ACTIONS.PURCHASE_INIT, purchaseCheesewichSaga);
};
