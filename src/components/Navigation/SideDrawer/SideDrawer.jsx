import React from 'react';
//TODO: import the logo
import NavItems from '../NavItems/NavItems.jsx';
import classes from './SideDrawer.css';

const SideDrawer = props => {

    return (
        <div className={classes.side_drawer}>
            {/* Logo */}
            <nav>
                <NavItems />
            </nav>
        </div>
    );
}


export default SideDrawer;