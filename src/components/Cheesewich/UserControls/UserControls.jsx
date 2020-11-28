import React from 'react';
import classes from './UserControls.css';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster.jsx';

const ingredients = [
    { label: 'Shallots', type: 'shallots'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const UserControls = (props) => {
    return (
        <div className={classes['user-control']}>
            {ingredients.map(ingredient => (
                <QuantityAdjuster key={ingredient.label} 
                                  label={ingredient.label} 
                                  added={()=> props.addIngredient(ingredient.type)}
                                  removed={()=> props.removeIngredient(ingredient.type)}
                                  disabled={props.disabled[ingredient.type]}/>
            ))}
        </div>
    );
}

export default UserControls;