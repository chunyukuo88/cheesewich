import * as actionTypes from '../actions/actionTypes';
import { updateObject,
    authStart,
    authSuccess,
    authFail } from '../utils';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        default: return state;
    };
};



export default reducer;
