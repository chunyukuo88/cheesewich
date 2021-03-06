import React from 'react';
import Cheesewich from '../../Cheesewich/Cheesewich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';

const CheckoutSummary = props => (
    <div className={classes.CheckoutSummary}>
        <h1>Mmm... cheesewich</h1>
        <div style={cheesewichInlineStyle}>
            <Cheesewich ingredients={props.ingredients}/>
        </div>
        <Button buttonType="red"
                clicked={props.checkoutCancelled}>
            Cancel
        </Button>
        <Button buttonType="green"
                clicked={props.checkoutContinue}>
            Continue
        </Button>
    </div>
);

const cheesewichInlineStyle = {
    margin: 'auto',
    width: '100%',
};

export default CheckoutSummary;
