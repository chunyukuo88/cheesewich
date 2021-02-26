import React from 'react';
import classes from './UserControls.css';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster';

const ingredients = [
    { label: 'Olives', type: 'olives'},
    { label: 'Crunchy', type: 'crunchybits'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Marinara', type: 'marinara'},
];

const UserControls = (props) => {
    return (
        <div className={classes['user-control']}>
            <div className={classes['current-price-wrapper']}>
                <p className={classes['price-label']}>Current price:</p>
                <div className={classes['price']}>{props.price.toFixed(2)}</div>
            </div>
            <div className={classes['ingredients-display']}>
                <IngredientsDisplay {...props}/>
            </div>
            <div className={classes['order-button-wrapper']}>
                <button className={classes['order-button']}
                        data-test='user-controls-button'
                        disabled={!props.purchasable}
                        onClick={props.ordered}>
                  <ButtonLabel {...props} />
                </button>
            </div>
        </div>
    )
};

const ButtonLabel = ({ isAuth }) => (isAuth) ? 'Place order!' : 'Sign Up to Order';

const IngredientsDisplay = (props) => {
    return ingredients.map(ingredient => {
        return (
            <div key={ingredient.label} className={classes['adjuster-wrapper']}>
                <QuantityAdjuster className={classes[`adjuster-${ingredient.label}`]}
                                  label={ingredient.label}
                                  data-test="quantity-adjuster"
                                  added={()=> props.addIngredient(ingredient.type)}
                                  removed={()=> props.removeIngredient(ingredient.type)}
                                  disabled={props.disabled[ingredient.type]}/>
            </div>
        );
    });
};

export default UserControls;
