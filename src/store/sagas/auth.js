import { put } from 'redux-saga/effects';
import * as actions from '../actions/auth';

export function* logoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutDidOccur());
};
