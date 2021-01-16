import React from 'react';
import { connect } from 'react-redux';
import Aux from '../auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.jsx';

const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = React.useState(false);
    const drawerCloser = () => setShowSideDrawer(false);
    const drawerOpener = () => setShowSideDrawer(false);
    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                clicked={drawerOpener}/>
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={drawerCloser}/>
            <div data-test="layout-overview"></div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    );
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);
