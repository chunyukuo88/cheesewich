import React from 'react';
import Aux from '../../../hoc/auxilliary';
import * as utils from './orderSummaryUtils';
import Button from '../../UI/Button/Button.jsx';

const OrderSummary = props => {
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A scrumptious cheesewich with the following ingredients:</p>
            <ul>
                {ingredientSummary(props.ingredients)}
            </ul>
            <p>Proceed to checkout?</p>
            <Button buttonType="green"
                    clicked={props.goToCheckout}>Yep!</Button>
            <Button buttonType="red"
                    clicked={props.orderCancelled}>Nope!</Button>
        </Aux>
    );
};

const ingredientSummary = ingredients => utils._getIngredientSummary(ingredients);


export default OrderSummary;