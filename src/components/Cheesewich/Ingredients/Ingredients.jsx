import React from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';

const Ingredient = ({ type }) => type && <div className={classes[type]}/>;

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
