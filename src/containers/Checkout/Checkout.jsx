import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';


const Checkout = (props) => {
    const checkoutCancelledHandler = () => props.history.goBack();
    const checkoutContinueHandler = () => props.history.replace('/checkout/contact-data');
    const summary = getSummaryIfIngredientsExist(props, checkoutCancelledHandler, checkoutContinueHandler);
    return summary;
}

const getSummaryIfIngredientsExist = (props, checkoutCancelFn, checkoutContinueFn) => props.ingredients
    ? buildSummary(props, checkoutCancelFn, checkoutContinueFn)
    : <Redirect to="/" />;

const buildSummary = (props, checkoutCancelFn, checkoutContinueFn) => {
    const redirectOnPurchase = props.purchased && <Redirect to="/"/>;
    return (
        <div>
            {redirectOnPurchase}
            <CheckoutSummary
                ingredients={props.ingredients}
                checkoutCancelled={checkoutCancelFn}
                checkoutContinue={checkoutContinueFn}/>
            <Route path={`${props.match.path}/contact-data`} component={ContactData} />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.builder.ingredients,
        purchased: state.order.purchaseHasBeenMade,
    };
};

export default connect(mapStateToProps)(Checkout);
