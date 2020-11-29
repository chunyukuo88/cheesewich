import INGREDIENT_PRICES from '../../components/Cheesewich/Ingredients/ingredientPrices';

export const additionFn = (stateObject, type) => {
    const updatedIngredients = _updateQuantitiesFollowingAddition(stateObject, type);
    const newPrice = _updatePriceFollowingAddition(stateObject, type);
    const purchasability = _orderButtonIsDisabled(updatedIngredients);
    return _buildUpdatedState(updatedIngredients, newPrice, purchasability);
};

const _updateQuantitiesFollowingAddition = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    return updatedIngredients;
};

const _updatePriceFollowingAddition = (stateObject, type) => {
    const additionToTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice + additionToTotalPrice;
    return newPrice;
};

export const removalFn = (stateObject, type) => {
    const updatedIngredients = _updateQuantitiesFollowingRemoval(stateObject, type);
    const newPrice = _updatePriceFollowingRemoval(stateObject, type);
    const purchasability = _orderButtonIsDisabled(updatedIngredients);
    return _buildUpdatedState(updatedIngredients, newPrice, purchasability);
};

const _orderButtonIsDisabled = ingredients => {
    const totalIngredients = _produceQuantityOfAllIngredients(ingredients);
    return totalIngredients > 0;
};

const _produceQuantityOfAllIngredients = ingredientsObject => {
    return Object.keys(ingredientsObject)
            .map(igKey => {
                return ingredientsObject[igKey];
            })
            .reduce((sum, element) => {
                return sum + element;
            }, 0);
};

const _updateQuantitiesFollowingRemoval = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    if (oldCount <= 0) return;
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
        ...stateObject.ingredients
    };
    updatedIngredients[type] = updatedCount;
    return updatedIngredients;
};

const _updatePriceFollowingRemoval = (stateObject, type) => {
    const subtractionFromTotalPrice = INGREDIENT_PRICES[type];
    const oldPrice = stateObject.totalPrice;
    const newPrice = oldPrice - subtractionFromTotalPrice;
    return newPrice;
};

const _buildUpdatedState = (ingredients, totalPrice, userCanOrder) => {
    return {
        ingredients: ingredients,
        totalPrice: totalPrice,
        userCanOrder: userCanOrder
    };
};

export const produceDisabledInfoObject = ingredientQuantityObject => {
    const disabledInfo = {...ingredientQuantityObject};
    _replaceQuantitiesWithBooleans(disabledInfo);
    return disabledInfo;
};

const _replaceQuantitiesWithBooleans = ingredientsObject => {
    for (const key in ingredientsObject) {
        ingredientsObject[key] = ingredientsObject[key] <= 0;
    };
};

