import axios from 'axios';
import * as actionTypes from './actionTypes';
import { getAuthUrl, getAuthData } from '../utils';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START,
    };
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData,
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
        const authData = getAuthData(email, password);
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
