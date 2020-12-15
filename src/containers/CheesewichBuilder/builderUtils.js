import React from 'react';
import OrderSummary from '../../components/Cheesewich/OrderSummary/OrderSummary.jsx';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';
import INGREDIENT_PRICES from '../../components/Cheesewich/Ingredients/ingredientPrices';

export const getOrderDataForCheckout = (state, customerInfo) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        customer: customerInfo,
    };
};

export const customerInfo = {
    name: 'David the Airplane',
    address: '123 Food Street',
    town: 'Flavor Town',
    country: 'Snackistan',
};

export const defaultBuilderState = {
    ingredients: { bacon: 0, cheese: 0, mustard: 0, shallots: 0, },
    totalPrice: 2,
    userCanOrder: false,
    userHasPlacedOrder: false,
    loading: false,
    error: null
};

export const goToCheckoutHandler = (state, props) => {
    const queryParams = [];
    const ingredients = state.ingredients;
    for (let i in ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    }
    const queryString = queryParams.join('&');
    props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    });
};

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

export const _updateQuantitiesFollowingRemoval = (stateObject, type) => {
    const oldCount = stateObject.ingredients[type];
    if (oldCount === 0) return undefined;
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
    if (oldPrice <= 2) return 2;
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

