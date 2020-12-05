import React, { Component } from 'react';
import axios from '../../../src/axios-instance';
import Aux from '../../hoc/auxilliary';
import { additionFn, 
         removalFn, 
         produceDisabledInfoObject, 
         stateWhenPageFirstLoads, 
         getOrderDataForCheckout,
         showSpinnerOrSummary,
         customerInfo } from './utils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';

class CheesewichBuilder extends Component {
    state = stateWhenPageFirstLoads;

    addIngredient = type => this.setState(additionFn(this.state, type));
    removeIngredient = type => this.setState(removalFn(this.state, type));
    orderHandler = () => this.setState({userHasPlacedOrder: true});
    orderCancellationHandler = () => this.setState({userHasPlacedOrder: false});

    proceedToCheckoutHandler = () => {
        this.setState({loading: true});
        const order = getOrderDataForCheckout(this.state, customerInfo);
        axios.post('/orders.json', order)
                .then(() => this.setState(stateWhenPageFirstLoads))
                .catch(e => this.setState(stateWhenPageFirstLoads));
    }

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        const orderSummary = showSpinnerOrSummary(this.state, this.orderCancellationHandler, this.proceedToCheckoutHandler)
        return (
            <Aux>
                <Modal show={this.state.userHasPlacedOrder} modalClosed={this.orderCancellationHandler}>
                    {orderSummary}
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