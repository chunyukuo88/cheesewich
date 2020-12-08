import React from 'react';
import Cheesewich from '../../Cheesewich/Cheesewich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';
const CheckoutSummary = props => {

    //TODO: Move this.
    const cheesewichInlineStyle = {
        width: '100%',
        margin: 'auto'
    };

    return (
        <div className={classes.CheckoutSummary}>
            <h1>Mmm... cheesewich</h1>
            <div style={cheesewichInlineStyle}>
                <Cheesewich ingredients={props.ingredients}/>
            </div>
            <Button buttonType="red"
                    clicked>
                Cancel
            </Button>
            <Button buttonType="green"
                    clicked>
                Continue
            </Button>
        </div>
    );
}

export default CheckoutSummary;
