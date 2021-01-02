import React from 'react';
import classes from './Order.css';

const Order = ({ ingredients, price }) => {
    return (
      <div className={classes.Order}>
          <p>Ingredients:</p>
          <ul>
              {buildContent(ingredients)}
          </ul>
          <p>Price: <strong data-test="orderPrice">${price}</strong></p>
      </div>
    );
};

const buildContent = (ingredients) => {
    const ingredientArray = [];
    for (const ingredient in ingredients) {
        ingredientArray.push({
            name: ingredient,
            amount: ingredients[ingredient]
        });
    };
    const result = ingredientArray.map(({name, amount}, key) => <li key={key} data-test="orderIngredient">{name}: {amount}</li>);
    return result;
};

export default Order;
