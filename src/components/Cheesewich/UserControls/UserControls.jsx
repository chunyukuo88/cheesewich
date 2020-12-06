import React from 'react';
import classes from './UserControls.css';
import { ingredients, getIngredientsDisplay } from './userControlsUtils';

const UserControls = (props) => (
    <div className={classes['user-control']}>
        <p>Current price: {props.price.toFixed(2)}</p>
        {getIngredientsDisplay(props, ingredients)}
        <button className={classes['order-button']}
                disabled={!props.purchasable}
                onClick={props.ordered}>Place order!</button>
    </div>
);

export default UserControls;