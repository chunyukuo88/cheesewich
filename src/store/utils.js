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
        price: state.price + INGREDIENT_PRICES[action.ingredientName],
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
