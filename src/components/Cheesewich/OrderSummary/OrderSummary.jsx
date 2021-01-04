import React from 'react';
import Aux from '../../../hoc/auxilliary';
import * as utils from './orderSummaryUtils';
import Button from '../../UI/Button/Button.jsx';

const OrderSummary = (props) => (
    <Aux>
        <h3>Your Order:</h3>
        <p>A scrumptious cheesewich with the following ingredients:</p>
        <ul>
            {ingredientSummary(props.ingredients)}
        </ul>
        <p>Total price: {props.price.toFixed(2)}</p>
        <p>Proceed to checkout?</p>
        <Button buttonType="green" clicked={props.goToCheckout}>Yep!</Button>
        <Button buttonType="red" clicked={props.orderCancelled}>Nope!</Button>
    </Aux>
);

const ingredientSummary = ingredients => utils._getIngredientSummary(ingredients);


export default OrderSummary;
