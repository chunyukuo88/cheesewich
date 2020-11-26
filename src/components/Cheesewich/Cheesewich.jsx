import React from 'react';
import classes from './Cheesewich.css';
import Ingredient from '../Cheesewich/Ingredients/Ingredients.jsx';

const Cheesewich = (props) => {
    return (
        <div className={classes.Cheesewich}>
            <Ingredient type="bread-top"/>
            <Ingredient type="cheese"/>
            <Ingredient type="meat"/>
            <Ingredient type="bread-bottom"/>
        </div>
    );
}

export default Cheesewich;