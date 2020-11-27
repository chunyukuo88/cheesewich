import React from 'react';
import classes from './Cheesewich.css';
import Ingredient from '../Cheesewich/Ingredients/Ingredients.jsx';
import { OptionalIngredients } from './OptionalIngredients';

const Cheesewich = props => {
    const transformedIngredients = OptionalIngredients(props.ingredients);
    return (
        <div className={classes.Cheesewich}>
            <Ingredient type="bread-top"/>
            {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default Cheesewich;