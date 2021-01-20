import React from 'react';
import classes from './Cheesewich.css';
import Ingredient from '../Cheesewich/Ingredients/Ingredients.jsx';
import { OptionalIngredients, checkForIngredients, reduceIngredients } from './OptionalIngredients';
import bread_top from '../../../src/components/Cheesewich/Ingredients/images/bread_top.png';

const Cheesewich = props => {
    const ingredients = getIngredients(props)
    return (
        <div className={classes.cheesewich}>
            {/*<Ingredient type="bread-top"/>*/}
            <img className={classes.bread_top} src={bread_top}/>
                {ingredients}
            <img className={classes.bread_bottom} src={bread_top}/>
        </div>
    );
};

export const getIngredients = ({ingredients}) => {
    let transformedIngredients = OptionalIngredients(ingredients);
    const reduced = reduceIngredients(transformedIngredients);
    transformedIngredients = checkForIngredients(reduced, transformedIngredients);
    return transformedIngredients;
};

export default Cheesewich;
