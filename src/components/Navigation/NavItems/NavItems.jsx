import React from 'react';
import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

const NavItems = (props) => (
    <ul className={classes.nav_items}>
        <NavigationItem link="/" exact>Cheesewich Builder</NavigationItem>
        <NavigationItem link="/orders">Orders</NavigationItem>
        {getAccessOption(props)}
    </ul>
);

const getAccessOption = (props) => {
    return (!props.isAuthenticated)
        ? <NavigationItem link="/auth">Sign In</NavigationItem>
        : <NavigationItem link="/logout">Sign out</NavigationItem>;
};

export default NavItems;
