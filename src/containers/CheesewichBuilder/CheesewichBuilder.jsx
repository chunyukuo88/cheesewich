import React, {useEffect, useState} from 'react';
import axios from '../../../src/axios-instance';
import {connect} from 'react-redux';
import * as utils from './builderUtils';
import {getControls, getSummary} from './builderUtils';
import { addIngredient, initIngredients, nixIngredient } from '../../store/actions/cheesewichBuilder';
import Aux from '../../hoc/auxilliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal.jsx';
import {purchaseInit} from '../../store/actions/order';
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
    const cheesewichAndControls = getControls(props, disabledInfo, orderHandler);
    const orderSummary = getSummary(props, orderCancellationHandler, proceedToCheckoutHandler);

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
