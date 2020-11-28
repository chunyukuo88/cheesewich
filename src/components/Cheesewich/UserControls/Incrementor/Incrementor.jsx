import React from 'react';
import classes from '../UserControls.css';

const Incrementor = (props) => (
    <div className={classes.user_control}>
        <div className={classes.label}>{props.label}</div>
        <button className={classes.more} onClick={props.added}>More</button>
        <button className={classes.less}>Less</button>
    </div>
);

export default Incrementor;