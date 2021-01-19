import React, {useEffect, useState} from 'react';
import axios from '../../../src/axios-instance';
import { useSelector, useDispatch } from 'react-redux';
import * as utils from './builderUtils';
import { getControls, getSummary } from './builderUtils';
import { addIngredient, initIngredients, nixIngredient } from '../../store/actions/cheesewichBuilder';
import Aux from '../../hoc/auxilliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Modal from '../../components/UI/Modal/Modal.jsx';
import { purchaseInit } from '../../store/actions/order';
import { setAuthRedirectPath } from '../../store/actions/auth';

const CheesewichBuilder = (props) => {
    const [ userHasPlacedOrder, setUserHasPlacedOrder] = useState(false);
    const dispatch = useDispatch();
    const ings = useSelector(state => state.builder.ingredients);
    const price = useSelector(state => state.builder.price);
    const error = useSelector(state => state.builder.error);
    const isAuthenticated = useSelector(state => state.auth.token !== null);
    const ingredientAdder = (ingName) => dispatch(addIngredient(ingName));
    const ingredientNixer = (ingName) => dispatch(nixIngredient(ingName));
    const purchaseInitializer = () => dispatch(purchaseInit());
    const propsForGetControls = { ings, price, error, isAuthenticated, ingredientAdder, ingredientNixer };

    useEffect(()=>{
        dispatch(initIngredients());
    }, [initIngredients]);

    const orderHandler = () => {
        if (isAuthenticated) {
            setUserHasPlacedOrder(true);
        } else {
            dispatch(setAuthRedirectPath('/checkout'));
            props.history.push('/auth');
        };
    };

    const orderCancellationHandler = () => setUserHasPlacedOrder(false);
    const proceedToCheckoutHandler = () => utils.goToCheckoutHandler(props, purchaseInitializer);
    const disabledInfo = utils.produceDisabledInfoObject(ings);
    const cheesewichAndControls = getControls(propsForGetControls, disabledInfo, orderHandler);
    const orderSummary = getSummary(ings, price, orderCancellationHandler, proceedToCheckoutHandler);

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

export default withErrorHandler(CheesewichBuilder, axios);
