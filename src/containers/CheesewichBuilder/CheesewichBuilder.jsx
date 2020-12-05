import React, { Component } from 'react';
import axios from '../../../src/axios-instance';
import Aux from '../../hoc/auxilliary';
import { additionFn, removalFn, produceDisabledInfoObject, stateWhenPageFirstLoads } from './utils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Cheesewich/OrderSummary/OrderSummary.jsx';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';

class CheesewichBuilder extends Component {
    state = stateWhenPageFirstLoads;

    addIngredient = type => this.setState(additionFn(this.state, type));
    removeIngredient = type => this.setState(removalFn(this.state, type));
    orderHandler = () => this.setState({userHasPlacedOrder: true});
    orderCancellationHandler = () => this.setState({userHasPlacedOrder: false});

    proceedToCheckoutHandler = () => {
        this.setState({loading: true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: customerInfo,
        };
        axios.post('/orders.json', order)
                .then(res => {
                    console.log(res)
                    this.setState(stateWhenPageFirstLoads);
                })
                .catch(e => {
                    console.error('=== Error ===\n\n', e);
                    this.setState(stateWhenPageFirstLoads);
                });
    }

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        const orderSummary = (this.state.loading)
            ? <Spinner />
            : <OrderSummary ingredients={this.state.ingredients}
                            orderCancelled={this.orderCancellationHandler}
                            goToCheckout={this.proceedToCheckoutHandler}
                            price={this.state.totalPrice}/>;
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

const customerInfo = {
    name: 'David the Airplane',
    address: '123 Food Street',
    town: 'Flavor Town',
    country: 'Snackistan',
};

export default CheesewichBuilder;