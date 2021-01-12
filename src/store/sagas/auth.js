import { put, delay } from 'redux-saga/effects';
import * as actions from '../actions/auth';
import axios from 'axios';
import { authFail,
    authStart,
    authSuccess,
    checkAuthTimeout,
    logout } from '../actions/auth';
import urls from '../../urls';

export function* authCheckStateSaga(){
        const token = yield localStorage.getItem('token');
        if (!token) {
            yield put(logout());
        } else {
            const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                yield put(logout());
            } else {
                const userId = yield localStorage.getItem('userId');
                yield put(authSuccess(token, userId));
                yield put(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
            };
        };
        yield token;
}

export function* authenticateUserSaga(action) {
    yield put(authStart());
    const authData = buildAuthData(action.email, action.password);
    const url = getAuthUrl(action.isSignup);
    const response = yield axios.post(url, authData);
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

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
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

const getAuthUrl = (isSignup) => (isSignup) ? urls.authSignIn : urls.authSignUp;
