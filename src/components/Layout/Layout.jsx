import React from 'react';
import Aux from '../../hoc/auxilliary';
import classes from './Layout.css';

const Layout = props => (
    <Aux>
        <div data-test="layout-overview">
            Toolbar, Sidebar
        </div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default Layout;