import React from 'react';
import classes from './Order.css';

const Order = ({ ingredients, price }) => {
    const ingredientArray = [];

    for (const ingredient in ingredients) {
        ingredientArray.push({name: ingredient, amount: ingredients[ingredient]});
    }

    const ingredientDisplay = ingredientArray.map(ing => {
        return <li>{ing.name}: {ing.amount}</li>;
    })

    return (
      <div className={classes.Order}>
          <p>Ingredients:</p>
          <ul>
              {ingredientDisplay}
          </ul>
          <p>Price: <strong>${price}</strong></p>
      </div>
    );
}

export default Order;
