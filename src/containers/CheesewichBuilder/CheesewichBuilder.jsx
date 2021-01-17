import React, { useState, useEffect } from 'react';
import axios from '../../../src/axios-instance';
import { connect } from 'react-redux';
import * as utils from './builderUtils';
import { addIngredient, initIngredients, nixIngredient } from '../../store/actions/cheesewichBuilder';
import Aux from '../../hoc/auxilliary';
import Cheesewich from '../../components/Cheesewich/Cheesewich.jsx';
import UserControls from '../../components/Cheesewich/UserControls/UserControls.jsx';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal.jsx';
import OrderSummary from '../../components/Cheesewich/OrderSummary/OrderSummary';
import { purchaseInit } from '../../store/actions/order';
import { setAuthRedirectPath } from '../../store/actions/auth';



const CheesewichBuilder = (props) => {
    const [ userHasPlacedOrder, setUserHasPlacedOrder] = useState(false);

    useEffect(()=>{
        props.onInitIngredients();
    }, []);

    const orderHandler = () => {
        if (props.isAuthenticated) {
            setUserHasPlacedOrder(true);
        } else {
            props.onSetAuthRedirectPath('/checkout');
            props.history.push('/auth');
        };
    };

    const orderCancellationHandler = () => setUserHasPlacedOrder(false);

    const proceedToCheckoutHandler = () => utils.goToCheckoutHandler(props);

    const disabledInfo = utils.produceDisabledInfoObject(props.ings);
    let orderSummary = null;
    let cheesewichAndControls = getStringOrSpinner(props.error);
    if (props.ings) {
        cheesewichAndControls = (
            <Aux>
                <Cheesewich ingredients={props.ings}/>
                <UserControls addIngredient={props.onIngredientAdded}
                              removeIngredient={props.onIngredientNixed}
                              disabled={disabledInfo}
                              isAuth={props.isAuthenticated}
                              ordered={orderHandler}
                              price={props.price}
                              purchasable={utils.getPurchasabilityStatus(props.ings)}/>
            </Aux>
        );
        orderSummary = <OrderSummary ingredients={props.ings}
                                     orderCancelled={orderCancellationHandler}
                                     goToCheckout={proceedToCheckoutHandler}
                                     price={props.price}/>;
    };

    return (
        <Aux>
            <Modal show={userHasPlacedOrder}
                   modalClosed={orderCancellationHandler}>
                {orderSummary}
            </Modal>
            {cheesewichAndControls}
        </Aux>
    );
}

const getStringOrSpinner = (error) => error ? <p>Ingredients not found.</p> : <Spinner />;

const mapStateToProps = state => {
    return {
        ings: state.builder.ingredients,
        price: state.builder.price,
        error: state.builder.error,
        isAuthenticated: state.auth.token !== null
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(addIngredient(ingName)),
        onIngredientNixed: (ingName) => dispatch(nixIngredient(ingName)),
        onInitIngredients: () => dispatch(initIngredients()),
        onInitPurchase: () => dispatch(purchaseInit()),
        onSetAuthRedirectPath: (path) => dispatch(setAuthRedirectPath(path)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CheesewichBuilder, axios));
