import React, { Component } from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
    render() {
        return _buildIngredientDisplay(this.props.type);
    }
};

export const _buildIngredientDisplay = (ingredient) => {
    return (ingredient) 
        ? <div className={classes[ingredient]}/> 
        : null;
}

Ingredient.propTypes = { type: PropTypes.string.isRequired };

export default Ingredient;
