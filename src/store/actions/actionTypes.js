export const ING_ACTIONS = {
    ADD_INGREDIENT: 'ADD_INGREDIENT',
    NIX_INGREDIENT: 'NIX_INGREDIENT',
    SET_INGREDIENTS: 'SET_INGREDIENTS',
    FETCH_INGREDIENTS_FAILED: 'FETCH_INGREDIENTS_FAILED',
};

export const ORDER_ACTIONS = {
    PURCHASE_CHEESEWICH_START: 'PURCHASE_CHEESEWICH_START',
    PURCHASE_CHEESEWICH_SUCCESS: 'PURCHASE_CHEESEWICH_SUCCESS',
    PURCHASE_CHEESEWICH_FAILED: 'PURCHASE_CHEESEWICH_FAILED',
    PURCHASE_INIT: 'PURCHASE_INIT',
    FETCH_ORDERS_START: 'FETCH_ORDERS_START',
    FETCH_ORDERS_SUCCESS: 'FETCH_ORDERS_SUCCESS',
    FETCH_ORDERS_FAIL: 'FETCH_ORDERS_FAIL',
    FETCH_ORDERS_INIT: 'FETCH_ORDERS_INIT',
};

export const AUTH_ACTIONS = {
    AUTH_START: 'AUTH_START',
    AUTH_SUCCESS: 'AUTH_SUCCESS',
    AUTH_FAIL: 'AUTH_FAIL',
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    AUTH_INITIATE_LOGOUT: 'AUTH_INITIATE_LOGOUT',
    AUTH_CHECK_TIMEOUT: 'AUTH_CHECK_TIMEOUT',
    AUTH_USER: 'AUTH_USER',
    AUTH_CHECK_STATE: 'AUTH_CHECK_STATE',
    SET_AUTH_REDIRECT_PATH: 'SET_AUTH_REDIRECT_PATH',
};
