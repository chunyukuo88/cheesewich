import React from 'react';
import { withRouter } from 'react-router-dom';
import classes from './Cheesewich.css';
import Ingredient from '../Cheesewich/Ingredients/Ingredients.jsx';
import { OptionalIngredients, checkForIngredients, reduceIngredients } from './OptionalIngredients';

const Cheesewich = props => {

    const ingredients = getIngredients(props)

    return (
        <div className={classes.cheesewich}>
            <Ingredient type="bread-top"/>
                {ingredients}
            <Ingredient type="bread-bottom"/>
        </div>
    );
};

export const getIngredients = ({ingredients}) => {
    let transformedIngredients = OptionalIngredients(ingredients);
    const reduced = reduceIngredients(transformedIngredients);
    transformedIngredients = checkForIngredients(reduced, transformedIngredients);
    return transformedIngredients;
};

export default withRouter(Cheesewich);
