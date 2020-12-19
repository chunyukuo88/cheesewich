import React from 'react';
import classes from './Order.css';

const Order = ({ ingredients, price }) => (
  <div className={classes.Order}>
      <p>Ingredients:</p>
      <ul>
          {ingredientsDisplay(ingredients)}
      </ul>
      <p>Price: <strong>${price}</strong></p>
  </div>
);

const ingredientsDisplay = (ingredients) => {
    const ingredientArray = [];
    for (const ingredient in ingredients) {
        ingredientArray.push({
            name: ingredient,
            amount: ingredients[ingredient]
        });
    };
    return ingredientArray.map(({name, amount}) => <li>{name}: {amount}</li>);
};

export default Order;
