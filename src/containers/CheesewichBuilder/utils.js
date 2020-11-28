const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    meat: 1.3,
    shallots: 0.7,
}

export const additionFn = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const additionToTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice + additionToTotalPrice;
    return {
        ingredients: updatedIngredients,
        totalPrice: newPrice
    };
};

export const removalFn = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const subtractionFromTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice + subtractionFromTotalPrice;
    return {
        ingredients: updatedIngredients,
        totalPrice: newPrice
    };
};

export const produceDisabledInfoObject = (ingredientQuantityObject) => {
    const disabledInfo = {...ingredientQuantityObject};
    for (const key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return disabledInfo;
}
