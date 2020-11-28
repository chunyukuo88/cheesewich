import React from 'react';
import classes from '../UserControls.css';

const QuantityAdjuster = (props) => (
    <div className={classes.user_control}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.more} 
                onClick={props.added}>More</button>
        <button className={classes.less} 
                onClick={props.removed}
                disabled={props.disabled}>Less</button>
    </div>
);

export default QuantityAdjuster;