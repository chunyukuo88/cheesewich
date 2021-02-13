import React from 'react';
import classes from './UserControls.css';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster';

const ingredients = [
    { label: 'Olives', type: 'olives'},
    { label: 'Crunchy', type: 'crunchybits'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Marinara', type: 'marinara'},
];

const UserControls = (props) => {
    return (
        <div className={classes['user-control']}>
            <div className={classes['current-price']}>
                <p>Current price: {props.price.toFixed(2)}</p>
            </div>
            <div className={classes['ingredients-display']}>
                {getIngredientsDisplay(props, ingredients)}
            </div>
            <div className={classes['order-button-wrapper']}>
                <button className={classes['order-button']} data-test='user-controls-button' disabled={!props.purchasable} onClick={props.ordered}>{getButtonLabel(props.isAuth)}</button>
            </div>
        </div>
    )
};

const getButtonLabel = (isAuth) => (isAuth)
    ? 'Place order!'
    : 'Sign Up to Order';

const getIngredientsDisplay = (props, ingredientsArray) => {
    return ingredientsArray.map(ingredient => {
        return (
            <QuantityAdjuster key={ingredient.label}
                              className={classes[`adjuster-${ingredient.label}`]}
                              label={ingredient.label}
                              data-test="quantity-adjuster"
                              added={()=> props.addIngredient(ingredient.type)}
                              removed={()=> props.removeIngredient(ingredient.type)}
                              disabled={props.disabled[ingredient.type]}/>
        );
    });
};

export default UserControls;
