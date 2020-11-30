import React from 'react';
import Aux from '../../../hoc/auxilliary.js';

const OrderSummary = ({ingredients}) => {
    const ingredientSummary = Object.keys(ingredients)
                                    .map(ingredient => {
                                        return _getSummaryItem(ingredients, ingredient);
                                    });
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

export const _getSummaryItem = (ingrsObject, ingr) => {
    return <li key={ingr}>{ingr}: {ingrsObject[ingr]}</li>;
};

export default OrderSummary;