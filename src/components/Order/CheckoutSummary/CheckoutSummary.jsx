import React from 'react';
import Cheesewich from '../../Cheesewich/Cheesewich';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.css';


const CheckoutSummary = props => {
    //TODO: Move this.
    const cheesewichInlineStyle = {
        margin: 'auto',
        width: '100%',
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
