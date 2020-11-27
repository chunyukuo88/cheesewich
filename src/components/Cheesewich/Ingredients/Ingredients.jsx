import React, { Component } from 'react';
import classes from './Ingredients.css';
import PropTypes from 'prop-types';

class Ingredient extends Component {
    render() {
        let ingredient = null;
        switch (this.props.type) {
            case ('bread-bottom'): ingredient = BreadBottom(); break;
            case ('bread-top'): ingredient = BreadTop(); break;
            case ('meat'): ingredient = Meat(); break;
            case ('cheese'): ingredient = Cheese(); break;
            case ('salad'): ingredient = Salad(); break;
            default: ingredient = null;
        }
        return ingredient;
    }
};

const BreadTop = () => (
    <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
    </div>
);   

const Meat = () => <div className={classes.Meat}></div>;
const BreadBottom = () => <div className={classes.BreadBottom}></div>
const Cheese = () => <div className={classes.Cheese}></div>;
const Salad = () => <div className={classes.Salad}></div>;

Ingredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default Ingredient;
