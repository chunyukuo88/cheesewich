const INGREDIENT_PRICES = {
    bacon: 0.5,
    cheese: 0.4,
    mustard: 1.3,
    shallots: 0.7,
}

export const orderButtonIsDisabled =  async ingredients => {
    const totalIngredients = await _produceQuantityOfAllIngredients(ingredients);
    console.log('totalIngredients: ', totalIngredients);
    return totalIngredients > 0;
};

export const _produceQuantityOfAllIngredients = ingredientsObject => {
    return Object.keys(ingredientsObject)
            .map(igKey => ingredientsObject[igKey])
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
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
    const purchasability = orderButtonIsDisabled(updatedIngredients);
    return {
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        userCanOrder: purchasability
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
    const newPrice = oldPrice - subtractionFromTotalPrice;
    const purchasability = orderButtonIsDisabled(updatedIngredients);
    return {
        ingredients: updatedIngredients,
        totalPrice: newPrice,
        userCanOrder: purchasability
    };
};

export const produceDisabledInfoObject = ingredientQuantityObject => {
    const disabledInfo = {...ingredientQuantityObject};
    _replaceQuantitiesWithBooleans(disabledInfo);
    return disabledInfo;
};

export const _replaceQuantitiesWithBooleans = ingredientsObject => {
    for (const key in ingredientsObject) {
        ingredientsObject[key] = ingredientsObject[key] <= 0;
    };
};

