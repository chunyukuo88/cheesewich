import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import axios from 'axios';
import { authFail, authStart, authSuccess, checkAuthTimeout } from '../actions/auth';
import urls from '../../urls';

export function* logoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutDidOccur());
};

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
};

export function* authenticateUserSaga(action) {
    yield put(authStart());
    const authData = buildAuthData(action.email, action.password);
    const url = getAuthUrl(action.isSignup);
    const response = yield axios.post(url, authData)
    /*** "yield" causes JS to wait for the promise from the axios.post() call
     * to resolve, so there is no need for a .then() block. "yield" synchronizes the otherwise
     * asynchronous promise! But since I am still expecting the possibility of an
     * error, I use a try/catch block instead of a .then()/.catch() approach.
     * */
    try {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(authSuccess(response.data.idToken, response.data.localId));
        yield put(checkAuthTimeout(response.data.expiresIn));
    } catch (error) {
        yield put(authFail(error.response.data.error));
    }
};

const buildAuthData = (email, password) => {
    return {
        email: email,
        password: password,
        returnSecureToken: true,
    };
};

const getAuthUrl = (isSignup) => (isSignup) ? urls.authSignIn : urls.authSignUp;
