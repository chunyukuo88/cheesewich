import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { getIngredientsFromURI } from './checkoutUtils';

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
            </div>
        );
    }
}

export default Checkout;
