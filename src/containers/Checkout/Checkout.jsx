import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { getIngredientsFromURI } from './checkoutUtils';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: {},
    };

    componentDidMount() {
        this.setState({ingredients: getIngredientsFromURI(this.props)});
    }

    checkoutCancelledHandler = () => this.props.history.goBack();
    checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data');

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
                <Route path={`${this.props.match.path}/contact-data`} component={ContactData}/>
            </div>
        );
    }
}

export default Checkout;
