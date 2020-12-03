import React from 'react';
import classes from './DrawerToggler.css';

const DrawerToggler = props => (
    <div className={classes.drawer_toggler} onClick={props.openDrawer}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default DrawerToggler;