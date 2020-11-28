import React from 'react';
import classes from './UserControls.css';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster.jsx';

const ingredients = [
    { label: 'Shallots', type: 'shallots'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Mustard', type: 'mustard'},
];

const UserControls = props => (
    <div className={classes['user-control']}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {_getIngredientsDisplay(props, ingredients)}
        <button className={classes['order-button']}
                disabled={!props.purchasable}>Place order!</button>
    </div>
);

const _getIngredientsDisplay = (props, ingredients) => {
    return ingredients.map(ingredient => (
        <QuantityAdjuster key={ingredient.label} 
                          label={ingredient.label} 
                          added={()=> props.addIngredient(ingredient.type)}
                          removed={()=> props.removeIngredient(ingredient.type)}
                          disabled={props.disabled[ingredient.type]}
                          />
        ));
};

export default UserControls;