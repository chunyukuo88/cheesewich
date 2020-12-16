import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { getIngredientsFromURI } from './checkoutUtils';
import ContactData from './ContactData/ContactData';

class Checkout extends Component {
    state = {
        ingredients: null,
        price: 0,
    };

    componentWillMount() {
        const { ingredients, price } = getIngredientsFromURI(this.props);
        this.setState({ingredients: ingredients, price: price});
    }

    checkoutCancelledHandler = () => this.props.history.goBack();
    checkoutContinueHandler = () => this.props.history.replace('/checkout/contact-data');

    render(){
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients}
                                 checkoutCancelled={this.checkoutCancelledHandler}
                                 checkoutContinue={this.checkoutContinueHandler}/>
                <Route
                    path={`${this.props.match.path}/contact-data`}
                    render={()=> <ContactData ingredients={this.state.ingredients} price={this.state.price}/>}/>
            </div>
        );
    }
}

export default Checkout;
