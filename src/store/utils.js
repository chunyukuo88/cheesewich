import urls from "../urls";

export const updateObject = (oldObject, updatedProperties) => {
    return {
      ...oldObject,
      ...updatedProperties
    };
};

export const addIngredient = (state, action, INGREDIENT_PRICES) => {
    return {
        ...state,
        ingredients: {
            ...state.ingredients,
            [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        price: state.price - INGREDIENT_PRICES[action.ingredientName],
    };
};

export const nixIngredient = (state, action, INGREDIENT_PRICES) => {
  return {
      ...state,
      ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      },
      price: state.price - INGREDIENT_PRICES[action.ingredientName],
  };
};

export const setIngredients = (state, action, initialState) => {
    const updatedProperties = {
        ingredients: action.ingredients,
        error: false,
        price: initialState.price
    };
    return updateObject(state, updatedProperties);
};

export const purchaseCheesewichSuccess = (state, action) => {
    const  newOrder = {
        ...action.orderData,
        id: action.orderId,
    };
    return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder),
        purchaseHasBeenMade: true,
    };
};

export const authStart = (state) => {
    return updateObject(state, { error: null, loading: true });
};

export const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false
    });
};

export const authFail = (state, action) => {
    return updateObject(state, {
        token: null,
        userId: null,
        error: action.error,
        loading: false
    });
};

export const getAuthUrl = (isSignup) => (isSignup) ? urls.authSignIn : urls.authSignUp;

export const getAuthData = (email, password) => {
    return {
        email: email,
        password: password,
        returnSecureToken: true,
    };
}
