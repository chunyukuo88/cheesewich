import INGREDIENT_PRICES from '../../components/Cheesewich/Ingredients/ingredientPrices';

export const orderButtonIsDisabled = ingredients => {
    const totalIngredients = _produceQuantityOfAllIngredients(ingredients);
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
    const newPrice = _updatePriceFollowingAddition(stateObject, type);
    const purchasability = orderButtonIsDisabled(updatedIngredients);
    return _buildUpdatedState(updatedIngredients, newPrice, purchasability);
};

export const _updatePriceFollowingAddition = (stateObject, type) => {
    const additionToTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice + additionToTotalPrice;
    return newPrice;
}

export const removalFn = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    if (oldCount === 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const newPrice = _updatePriceFollowingRemoval(stateObject, type);
    const purchasability = orderButtonIsDisabled(updatedIngredients);
    return _buildUpdatedState(updatedIngredients, newPrice, purchasability);
};

export const _updatePriceFollowingRemoval = (stateObject, type) => {
    const subtractionFromTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice - subtractionFromTotalPrice;
    return newPrice;
}

export const _buildUpdatedState = (ingredients, totalPrice, userCanOrder) => {
    return {
        ingredients: ingredients,
        totalPrice: totalPrice,
        userCanOrder: userCanOrder
    }
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

