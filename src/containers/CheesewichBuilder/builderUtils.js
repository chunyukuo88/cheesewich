import OrderSummary from "../../components/Cheesewich/OrderSummary/OrderSummary";
import React from "react";
import Aux from "../../hoc/auxilliary";
import Cheesewich from "../../components/Cheesewich/Cheesewich";
import UserControls from "../../components/Cheesewich/UserControls/UserControls";
import Spinner from "../../components/UI/Spinner/Spinner";

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
                      .reduce((sum, el) => {
                        return sum + el;
                      }, 0);
    return sum > 0;
};


export const goToCheckoutHandler = (props, purchaseInitializer) => {
    purchaseInitializer();
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

export const getSummary = (ings, price, cancelFn, checkoutFn) => {
    return (ings) &&
        <OrderSummary ingredients={ings}
                      orderCancelled={cancelFn}
                      goToCheckout={checkoutFn}
                      price={price}/>;
};

export const getControls = (props, disabledInfo, orderHandler) => {
    return (props.ings)
        ? (
            <Aux>
                <Cheesewich ingredients={props.ings}/>
                <UserControls addIngredient={props.ingredientAdder}
                              removeIngredient={props.ingredientNixer}
                              disabled={disabledInfo}
                              isAuth={props.isAuthenticated}
                              ordered={orderHandler}
                              price={props.price}
                              purchasable={getPurchasabilityStatus(props.ings)}/>
            </Aux>
        )
        : getStringOrSpinner(props.error);
};
const getStringOrSpinner = (error) => error ? <p>Ingredients not found.</p> : <Spinner/>;
