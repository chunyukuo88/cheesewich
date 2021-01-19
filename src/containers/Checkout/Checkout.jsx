import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { useSelector } from 'react-redux';


const Checkout = (props) => {
    const checkoutCancelledHandler = () => props.history.goBack();
    const checkoutContinueHandler = () => props.history.replace('/checkout/contact-data');
    const ingredients = useSelector(state => state.builder.ingredients);
    const purchased = useSelector(state => state.order.purchaseHasBeenMade);
    const { path } = props.match;
    const summary = getSummaryIfIngredientsExist(ingredients, purchased, path, checkoutCancelledHandler, checkoutContinueHandler);
    return summary;
}

const getSummaryIfIngredientsExist = (ingredients, purchased, path, checkoutCancelFn, checkoutContinueFn) => ingredients
    ? buildSummary(ingredients, purchased, path, checkoutCancelFn, checkoutContinueFn)
    : <Redirect to="/" />;

const buildSummary = (ingredients, purchased, path, checkoutCancelFn, checkoutContinueFn) => {
    const redirectOnPurchase = purchased && <Redirect to="/"/>;
    return (
        <div>
            {redirectOnPurchase}
            <CheckoutSummary
                ingredients={ingredients}
                checkoutCancelled={checkoutCancelFn}
                checkoutContinue={checkoutContinueFn}/>
            <Route path={`${path}/contact-data`} component={ContactData} />
        </div>
    );
};

export default Checkout;
