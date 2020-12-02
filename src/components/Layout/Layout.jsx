import React from 'react';
import Aux from '../../hoc/auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';

const Layout = props => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        <div data-test="layout-overview">
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;