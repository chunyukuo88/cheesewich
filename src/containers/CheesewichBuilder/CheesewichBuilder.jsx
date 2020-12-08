import React, { Component } from 'react';
import axios from '../../../src/axios-instance';
import Aux from '../../hoc/auxilliary';
import { additionFn,
         removalFn,
         produceDisabledInfoObject,
         defaultBuilderState,
         getOrderDataForCheckout,
         customerInfo } from './builderUtils';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';
import Modal from '../../components/UI/Modal/Modal.jsx';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from "../../components/UI/Spinner/Spinner";
import OrderSummary from "../../components/Cheesewich/OrderSummary/OrderSummary";


class CheesewichBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 2,
        userCanOrder: false,
        userHasPlacedOrder: false,
        loading: false,
        error: null
    };

    componentDidMount() {
        axios.get('https://cheesewich-49a69-default-rtdb.firebaseio.com/ingredients.json')
             .then(res => {
                this.setState({ingredients : res.data});
             })
            .catch(error => {
                this.setState({error: error});
            });
    }

    addIngredient = type => this.setState(additionFn(this.state, type));
    removeIngredient = type => this.setState(removalFn(this.state, type));
    orderHandler = () => this.setState({userHasPlacedOrder: true});
    orderCancellationHandler = () => this.setState({userHasPlacedOrder: false});

    proceedToCheckoutHandler = () => {
        this.setState({loading: true});
        const order = getOrderDataForCheckout(this.state, customerInfo);
        axios.post('/orders.json', order)
                .then(() => this.setState(defaultBuilderState))
                .catch(e => this.setState(defaultBuilderState));
    }

    render(){
        const disabledInfo = produceDisabledInfoObject(this.state.ingredients);
        let orderSummary = null;
        let cheesewichAndControls = this.state.error ? <p>Ingredients could not be found.</p> : <Spinner />;
        if (this.state.ingredients) {
           cheesewichAndControls = (
                <Aux>
                    <Cheesewich ingredients={this.state.ingredients} />
                    <UserControls addIngredient={this.addIngredient}
                                  removeIngredient={this.removeIngredient}
                                  disabled={disabledInfo}
                                  price={this.state.totalPrice}
                                  purchasable={this.state.userCanOrder}
                                  ordered={this.orderHandler}/>
                </Aux>
            );
            orderSummary = <OrderSummary ingredients={this.state.ingredients}
                                         orderCancelled={this.orderCancellationHandler}
                                         goToCheckout={this.proceedToCheckoutHandler}
                                         price={this.state.totalPrice}/>;
        }
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        console.log('this.state.loading: ', this.state.loading);
        console.log('this.state.ingredients: ', this.state.ingredients);
        return (
            <Aux>
                <Modal show={this.state.userHasPlacedOrder}
                       modalClosed={this.orderCancellationHandler}>
                    {orderSummary}
                </Modal>
                {cheesewichAndControls}
            </Aux>
        );
    }
}


export default withErrorHandler(CheesewichBuilder, axios);
