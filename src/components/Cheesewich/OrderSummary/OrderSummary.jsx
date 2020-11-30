import React from 'react';
import Aux from '../../../hoc/auxilliary';
import { _getSummaryItem, _getIngredientSummary } from './orderSummaryUtils';

const OrderSummary = ({ingredients}) => {
    const ingredientSummary = _getIngredientSummary(ingredients);
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A scrumptious cheesewich with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Proceed to checkout?</p>
        </Aux>
    );
};


export default OrderSummary;