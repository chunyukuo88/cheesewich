import React from 'react';
import Aux from '../../hoc/auxilliary';

const Layout = (props) => (
    <Aux>
        <div data-test="layout-overview">
            Toolbar, Sidebar, Backdrop
        </div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;