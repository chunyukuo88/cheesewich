import React from 'react';
import Aux from '../../../hoc/auxilliary';
import Button from '../../UI/Button/Button.jsx';

const OrderSummary = (props) => {
    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>A scrumptious cheesewich with the following ingredients:</p>
            <ul data-test="ul">
                <IngredientSummary data-test="summary" {...props}/>
            </ul>
            <p>Total price: {props.price.toFixed(2)}</p>
            <p>Proceed to checkout?</p>
            <Button buttonType="green" clicked={props.goToCheckout}>Yep!</Button>
            <Button buttonType="red" clicked={props.orderCancelled}>Nope!</Button>
        </Aux>
    );
}

export const IngredientSummary = ({ ingredients }) => (
    Object.keys(ingredients)
            .map(ingredient => {
                    return getSummaryItem(ingredients, ingredient);
            })
);

const getSummaryItem = (ingrsObject, ingr) => (
    <li data-test="li" key={ingr}>
        {ingr}: {ingrsObject[ingr]}
    </li>
);

export default OrderSummary;
