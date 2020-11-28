import React from 'react';
import classes from './UserControls.css';
import Incrementor from './Incrementor/Incrementor.jsx';

const ingredients = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
];

const UserControls = (props) => (
    <div className={classes['user-control']}>
        {ingredients.map(ingredient => (
            <Incrementor key={ingredient.label} 
                         label={ingredient.label} 
                         added={()=> props.addIngredient(ingredient.type)}/>
        ))}
    </div>
);

export default UserControls;