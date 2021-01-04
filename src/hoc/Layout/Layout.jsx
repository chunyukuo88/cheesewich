import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../auxilliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer.jsx';

class Layout extends Component {
    state = { showSideDrawer: false }

    drawerCloser = () => this.setState({showSideDrawer: false});
    drawerOpener = () => this.setState({showSideDrawer: true});

    render(){
        return (
            <Aux>
                <Toolbar
                    isAuth={this.props.isAuthenticated}
                    clicked={this.drawerOpener}/>
                <SideDrawer
                    isAuth={this.props.isAuthenticated}
                    open={this.state.showSideDrawer}
                    closed={this.drawerCloser}/>
                <div data-test="layout-overview"></div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

export default connect(mapStateToProps)(Layout);
