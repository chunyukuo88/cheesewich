import axios from 'axios';
import * as actionTypes from './actionTypes';
import urls from '../../urls';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = ({ idToken, userId }) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
    };
};

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = buildAuthData(email, password);
        const url = getAuthUrl(isSignup);
        axios.post(url, authData)
            .then(response => {
                dispatch(authSuccess(response.data));
            })
            .catch(error => {
                console.log(error);
                dispatch(authFail(error));
            });
    };
};

const getAuthUrl = (isSignup) => (isSignup) ? urls.authSignIn : urls.authSignUp;

const buildAuthData = (email, password) => {
    return {
        email: email,
        password: password,
        returnSecureToken: true,
    };
}
