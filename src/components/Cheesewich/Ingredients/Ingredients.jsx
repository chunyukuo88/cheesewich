import React from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';
import foot from './images/foot.png';
import turtle from './images/turtle.png';

const Ingredient = ({ type }) => {
    switch (type) {
        case 'cheese': return <img className={classes.foot} src={foot}/>;
        case 'bacon': return <img className={classes.turtle} src={turtle}/>;
        default: return type && <div className={classes[type]}/>;
    }
}

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
