export const updatePurchasabilityStatus = (ingredients) => {
    const sum = Object.keys( ingredients )
                      .map( igKey => {
                          return ingredients[igKey];
                      })
                      .reduce( (sum, el) => {
                        return sum + el;
                      }, 0);
    return sum > 0;
};

export const getOrderDataForCheckout = (state, customerInfo) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        customer: customerInfo,
    };
};

export const goToCheckoutHandler = (state, props) => {
    const queryString = _produceQueryString(state);
    props.history.push({
        pathname: '/checkout',
        search: '?' + queryString
    });
};

const _produceQueryString = ({ingredients, totalPrice}) => {
    const queryParams = [];
    for (const i in ingredients) {
        queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    };
    queryParams.push(`price=${totalPrice}`);
    return queryParams.join('&');
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

