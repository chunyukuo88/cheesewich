import { put, delay } from 'redux-saga/effects';
import axios from 'axios';
import urls from '../../urls';
import * as actions from '../actions/auth';

const { authSignIn, authSignUp } = urls;

export function* authCheckStateSaga(){
    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.logout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            yield put(actions.logout());
        } else {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
        };
    };
    yield token;
}

export function* authenticateUserSaga(action) {
    yield put(actions.authStart());
    const authData = buildAuthData(action.email, action.password);
    const url = getAuthUrl(action.isSignup);
    const response = yield axios.post(url, authData);
    try {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(actions.authFail(error.response.data.error));
    }
};

export function* checkAuthTimeoutSaga(action, storage) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout(storage));
};

export function* logoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutDidOccur());
};

const buildAuthData = (email, password) => {
    return {
        email: email,
        password: password,
        returnSecureToken: true,
    };
};

const getAuthUrl = (isSignup) => (isSignup) ? authSignIn : authSignUp;
