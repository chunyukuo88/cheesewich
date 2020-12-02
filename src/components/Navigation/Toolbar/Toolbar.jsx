import React from 'react';
import classes from './Toolbar.css';
import NavItems from '../NavItems/NavItems.jsx';

const Toolbar = props => (
    <header className={classes.toolbar}>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            <NavItems />
        </nav>
    </header>
);

export default Toolbar;