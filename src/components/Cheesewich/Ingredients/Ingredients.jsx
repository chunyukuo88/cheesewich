import React from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';
import cheese from './images/cheese.png';
import bacon from './images/bacon.png';

const Ingredient = ({ type }) => {
    switch (type) {
        case 'cheese': return <img className={classes.optional} src={cheese}/>;
        case 'bacon': return <img className={classes.optional} src={bacon}/>;
        default: return type && <div className={classes[type]}/>;
    }
}

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
