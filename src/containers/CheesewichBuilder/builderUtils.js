export const getOrderDataForCheckout = (state, customerInfo) => {
    return {
        ingredients: state.ingredients,
        price: state.totalPrice,
        customer: customerInfo,
    };
};

export const getPurchasabilityStatus = (ingredients) => {
    const sum = Object.keys( ingredients )
                      .map( igKey => {
                          return ingredients[igKey];
                      })
                      .reduce( (sum, el) => {
                        return sum + el;
                      }, 0);
    return sum > 0;
};


export const goToCheckoutHandler = (props) => {
    props.onInitPurchase();
    props.history.push('/checkout');
}

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

