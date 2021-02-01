import React from 'react';
import classes from '../UserControls.css';

const QuantityAdjuster = (props) => (
    <div>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.more}
                data-test={`add-${props.label}`}
                onClick={props.added}>More</button>
        <button className={classes.less}
                data-test={`nix-${props.label}`}
                onClick={props.removed}
                disabled={props.disabled}>Less</button>
    </div>
);

export default QuantityAdjuster;
