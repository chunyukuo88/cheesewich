import React, { Component } from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
    render() {
        console.log(this.props.type);
        const ingredient = _buildIngredientDisplay(this.props.type);
        return ingredient;
    }
};

export const _buildIngredientDisplay = (ingredient) => {
    if (ingredient) return <div className={classes[ingredient]}></div>;
    return null;
}


Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient;
