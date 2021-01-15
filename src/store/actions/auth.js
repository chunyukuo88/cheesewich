import { AUTH_ACTIONS } from './actionTypes';

export const auth = (email, password, isSignup) => {
    return {
        type: AUTH_ACTIONS.AUTH_USER,
        email: email,
        password: password,
        isSignup: isSignup
    };
};

export const authCheckState = () => {
    return {
        type: AUTH_ACTIONS.AUTH_CHECK_STATE,
    };
};

export const authFail = (error) => {
    return {
        type: AUTH_ACTIONS.AUTH_FAIL,
        error: error,
    };
};

export const authStart = () => {
    return {
        type: AUTH_ACTIONS.AUTH_START,
    };
};

export const authSuccess = (idToken, userId) => {
    return {
        type: AUTH_ACTIONS.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: AUTH_ACTIONS.AUTH_CHECK_TIMEOUT,
        expirationTime: expirationTime
    };
};

export const logout = (localStorage) => {
    return {
        type: AUTH_ACTIONS.AUTH_INITIATE_LOGOUT,
        storage: localStorage,
    };
};

export const logoutDidOccur = () => {
    return {
        type: AUTH_ACTIONS.AUTH_LOGOUT,
    };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: AUTH_ACTIONS.SET_AUTH_REDIRECT_PATH,
        path: path,
    };
};
