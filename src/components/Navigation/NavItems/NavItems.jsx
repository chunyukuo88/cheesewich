import React from 'react';
import classes from './NavItems.css';
import NavigationItem from '../NavigationItem/NavigationItem.jsx';

const NavItems = (props) => (
    <ul className={classes.nav_items}>
        <NavigationItem link="/" exact>Cheesewich Builder</NavigationItem>
        <OrdersContent {...props}/>
        <AccessOptions {...props}/>
    </ul>
);

const AccessOptions = (props) => {
    return (!props.isAuthenticated)
        ? <NavigationItem link="/auth">Sign In</NavigationItem>
        : <NavigationItem link="/logout">Sign out</NavigationItem>;
};

const OrdersContent = (props) => {
    return (props.isAuthenticated)
        ? <NavigationItem link="/orders">Orders</NavigationItem>
        : null;
}

export default NavItems;
