import React from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';
import cheese from './images/cheese.png';
import bacon from './images/bacon.png';
import shallots from './images/shallots.png';
import mustard from './images/mustard.png';

const Ingredient = ({ type }) => {
    switch (type) {
        case 'cheese': return <img className={classes.optional} src={cheese} alt="cheese"/>;
        case 'bacon': return <img className={classes.optional} src={bacon} alt="bacon"/>;
        case 'shallots': return <img className={classes.optional} src={shallots} alt="shallots"/>;
        case 'mustard': return <img className={classes.optional} src={mustard} alt="mustard"/>;
        default: return null;
    }
}

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
