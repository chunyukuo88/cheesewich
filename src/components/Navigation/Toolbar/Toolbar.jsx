import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems.jsx';
import DrawerToggler from '../SideDrawer/DrawerToggler/DrawerToggler.jsx';

const Toolbar = props => (
    <header className={classes.toolbar}>
        <DrawerToggler openDrawer={props.clicked}/>
        <div>LOGO</div>
        <nav className={classes.desktop_only}>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar;