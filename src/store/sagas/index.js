import { takeEvery } from 'redux-saga/effects';
import { AUTH_ACTIONS } from '../actions/actionTypes';
import {
    authCheckStateSaga,
    authenticateUserSaga,
    checkAuthTimeoutSaga,
    logoutSaga,
} from './auth';

export function* watchAuth() {
    yield takeEvery(AUTH_ACTIONS.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_USER, authenticateUserSaga);
    yield takeEvery(AUTH_ACTIONS.AUTH_CHECK_STATE, authCheckStateSaga);
}
