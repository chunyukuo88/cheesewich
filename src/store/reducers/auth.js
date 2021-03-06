import { AUTH_ACTIONS } from '../actions/actionTypes';
import { updateObject } from '../../utils/utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH_START: return authStart(state);
        case AUTH_ACTIONS.AUTH_SUCCESS: return authSuccess(state, action);
        case AUTH_ACTIONS.AUTH_FAIL: return authFail(state, action);
        case AUTH_ACTIONS.AUTH_LOGOUT: return authLogout(state);
        case AUTH_ACTIONS.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state, action);
        default: return state;
    };
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path});
};

const authStart = (state) => {
    return updateObject(state, { error: null, loading: true });
};

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

const authLogout = (state) => {
    return updateObject(state, initialState);
}

const authFail = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        error: action.error,
        loading: false
    });
};

export default reducer;
