import React from 'react';
import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

const NavItems = () => (
    <ul className={classes.nav_items}>
        <NavigationItem link="/" exact>Cheesewich Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        <NavigationItem link="/auth">Authenticate</NavigationItem>
    </ul>
);

export default NavItems;
