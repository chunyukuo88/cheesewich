import React from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';
import cheese from './images/cheese.png';
import crunchybits from './images/crunchybits.png';
import olives from './images/olives.png';
import marinara from './images/marinara.png';

const Ingredient = ({ type }) => {
    switch (type) {
        case 'cheese': return <img className={classes.optional}
                                   src={cheese}
                                   alt="cheese"/>;
        case 'crunchybits': return <img className={classes.optional}
                                        src={crunchybits}
                                        alt="crunchybits"/>;
        case 'olives': return <img className={classes.optional}
                                   src={olives}
                                   alt="olives"/>;
        case 'marinara': return <img className={classes.optional}
                                     src={marinara}
                                     alt="marinara"/>;
        default: return null;
    }
}

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
