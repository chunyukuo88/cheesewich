import React from 'react';
import classes from './Order.css';

const Order = ({ ingredients, price }) => (
  <div className={classes.Order}>
      <p>Ingredients:</p>
      <ul>
          <li>Bacon: {ingredients.bacon}</li>
          <li>Shallots: {ingredients.shallots}</li>
          <li>Cheese: {ingredients.cheese}</li>
          <li>Mustard: {ingredients.mustard}</li>
      </ul>
      <p>Price: <strong>${price}</strong></p>
  </div>
);

export default Order;
