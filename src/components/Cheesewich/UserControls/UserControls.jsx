import React from 'react';
import classes from './UserControls.css';
import QuantityAdjuster from "./QuantityAdjuster/QuantityAdjuster";

const ingredients = [
    { label: 'Olives', type: 'olives'},
    { label: 'Crunchy Bits', type: 'crunchybits'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Marinara', type: 'marinara'},
];

const UserControls = (props) => (
    <div className={classes['user-control']}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {getIngredientsDisplay(props, ingredients)}
        <button className={classes['order-button']}
                data-test='user-controls-button'
                disabled={!props.purchasable}
                onClick={props.ordered}>{getButtonLabel(props.isAuth)}</button>
    </div>
);

const getButtonLabel = (isAuth) => (isAuth)
    ? 'Place order!'
    : 'Sign Up to Order';


const getIngredientsDisplay = (props, ingredientArray) => {
    console.log(props.addIngredient);
    // console.log(props.removeIngredient);
    return ingredientArray.map(ingredient => {
        return (
            <QuantityAdjuster key={ingredient.label}
                              label={ingredient.label}
                              added={()=> props.addIngredient(ingredient.type)}
                              removed={()=> props.removeIngredient(ingredient.type)}
                              disabled={props.disabled[ingredient.type]}/>
        );
    });
};

export default UserControls;
