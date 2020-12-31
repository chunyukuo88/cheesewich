import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
    checkoutCancelledHandler = () => this.props.history.goBack();
    checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data');

    render(){
        const summary = getSummaryIfIngredientsExist(this.props, this.checkoutCancelledHandler, this.checkoutContinueHandler);
        return summary;
    };
}

const getSummaryIfIngredientsExist = (props, checkoutCancelFn, checkoutContinueFn) => {
    return props.ingredients ? buildSummary(props, checkoutCancelFn, checkoutContinueFn) : <Redirect to="/"/>;
};

const buildSummary = (props, checkoutCancelFn, checkoutContinueFn) => (
    <div>
        <CheckoutSummary
            ingredients={props.ingredients}
            checkoutCancelled={checkoutCancelFn}
            checkoutContinue={checkoutContinueFn}/>
        <Route path={`${props.match.path}/contact-data`} component={ContactData} />
    </div>
);

const mapStateToProps = (state) => {
    return {
        ingredients: state.builder.ingredients
    };
};

export default connect(mapStateToProps)(Checkout);
