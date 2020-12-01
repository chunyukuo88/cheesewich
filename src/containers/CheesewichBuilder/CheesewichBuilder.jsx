import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import { additionFn, removalFn, produceDisabledInfoObject } from './utils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Cheesewich/OrderSummary/OrderSummary.jsx';

class CheesewichBuilder extends Component {
    state = {
        ingredients: { bacon: 0, cheese: 0, mustard: 0, shallots: 0, },
        totalPrice: 2,
        userCanOrder: false,
        userHasPlacedOrder: false
    };


    addIngredient = type => {
        this.setState(additionFn(this.state, type));
    }

    removeIngredient = type => {
        this.setState(removalFn(this.state, type));
    } 

    orderHandler = () => {
        this.setState({userHasPlacedOrder: true});
    }

    orderCancellationHandler = () => {
        this.setState({userHasPlacedOrder: false});
    }

    proceedToCheckoutHandler = () => {
        alert('Add a checkout function');
    }

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        return (
            <Aux>
                <Modal show={this.state.userHasPlacedOrder} modalClosed={this.orderCancellationHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  orderCancelled={this.orderCancellationHandler}
                                  goToCheckout={this.proceedToCheckoutHandler}/>
                </Modal>
                <Cheesewich ingredients={this.state.ingredients} />
                <UserControls addIngredient={this.addIngredient} 
                              removeIngredient={this.removeIngredient}
                              disabled={disabledInfo}
                              price={this.state.totalPrice}
                              purchasable={this.state.userCanOrder}
                              ordered={this.orderHandler}/>
            </Aux>
        );
    }
}

export default CheesewichBuilder;