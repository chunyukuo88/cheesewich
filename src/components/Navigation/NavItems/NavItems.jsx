import React from 'react';
import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

const NavItems = (props) => (
    <ul className={classes.nav_items}>
        <NavigationItem link="/" exact>Cheesewich Builder</NavigationItem>
        {getOrders(props)}
        {getAccessOptions(props)}
    </ul>
);

const getAccessOptions = (props) => {
    return (!props.isAuthenticated)
        ? <NavigationItem link="/auth">Sign In</NavigationItem>
        : <NavigationItem link="/logout">Sign out</NavigationItem>;
};

const getOrders = (props) => {
    return (props.isAuthenticated)
        ? <NavigationItem link="/orders">Orders</NavigationItem>
        : null;
}

export default NavItems;
