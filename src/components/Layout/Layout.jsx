import React, { Component } from 'react';
import Aux from '../../hoc/auxilliary';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar.jsx';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer.jsx';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    drawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    openCloseHandler = () => {
        console.log('openCloseHandler()');
        this.setState({showSideDrawer: true});
    }

    render(){
        return (
            <Aux>
                <Toolbar openDrawer={this.openCloseHandler}/>
                <SideDrawer open={this.state.showSideDrawer} 
                            closed={this.drawerCloseHandler}/>
                <div data-test="layout-overview">
                </div>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;