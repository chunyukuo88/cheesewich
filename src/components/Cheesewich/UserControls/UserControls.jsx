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
            <p className={classes['current-price']}>Current price: {props.price.toFixed(2)}</p>
            <div className={classes['ingredients-display']}>
                {getIngredientsDisplay(props, ingredients)}
            </div>
            <button className={classes['order-button']}
                    data-test='user-controls-button'
                    disabled={!props.purchasable}
                    onClick={props.ordered}>{getButtonLabel(props.isAuth)}</button>
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
