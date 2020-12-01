import React from 'react';
import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

const NavItems = () => (
    <ul className={classes.nav_items}>
        <NavigationItem link="/" active>Cheesewich Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default NavItems;