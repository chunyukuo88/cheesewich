import React from 'react';
import Aux from '../../../hoc/auxilliary';
import Button from '../../UI/Button/Button.jsx';

const OrderSummary = (props) => {
    console.log(props)
return (
    <Aux>
        <h3>Your Order:</h3>
        <p>A scrumptious cheesewich with the following ingredients:</p>
        <ul>
            <IngredientSummary {...props}/>
        </ul>
        <p>Total price: {props.price.toFixed(2)}</p>
        <p>Proceed to checkout?</p>
        <Button buttonType="green" clicked={props.goToCheckout}>Yep!</Button>
        <Button buttonType="red" clicked={props.orderCancelled}>Nope!</Button>
    </Aux>
);
}

const IngredientSummary = ({ ingredients }) => getIngredientSummary(ingredients);

const getSummaryItem = (ingrsObject, ingr) => (
    <li key={ingr}>
            {ingr}: {ingrsObject[ingr]}
    </li>
);

const getIngredientSummary = ingredients => (
    Object.keys(ingredients)
            .map(ingredient => {
                    return getSummaryItem(ingredients, ingredient);
            })
);


export default OrderSummary;
