import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems.jsx';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler.jsx';
import logo from '../logo.png';

const Toolbar = props => (
    <header className={classes.toolbar}>
        <DrawerToggler openDrawer={props.clicked}/>
        <img className={classes.logo} src={logo} alt="logo"></img>
        <nav className={classes.desktop_only}>
            <NavItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;
