import React from 'react';
import classes from '../UserControls.css';

const Incrementor = (props) => (
    <div>
        <div>{props.label}</div>
        <button className={classes.more}>More</button>
        <button className={classes.less}>Less</button>
    </div>
);

export default Incrementor;