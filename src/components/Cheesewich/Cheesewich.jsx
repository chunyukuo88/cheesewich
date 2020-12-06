import React from 'react';
import classes from './Cheesewich.css';
import Ingredient from '../Cheesewich/Ingredients/Ingredients.jsx';
import { OptionalIngredients, checkForIngredients, reduceIngredients } from './OptionalIngredients';

const Cheesewich = props => {
    let transformedIngredients = OptionalIngredients(props.ingredients);
    const reduced = reduceIngredients(transformedIngredients);
    transformedIngredients = checkForIngredients(reduced, transformedIngredients);

    return (
        <div className={classes.cheesewich}>
            <Ingredient type="bread-top"/>
                {transformedIngredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export default Cheesewich;