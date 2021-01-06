import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import CheesewichBuilder from './containers/CheesewichBuilder/CheesewichBuilder.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import Orders from './containers/Orders/Orders.jsx';
import Auth from './containers/Auth/Auth.jsx';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/auth';

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignup();
    }

    render() {
        return (
            <Layout>
                <Switch>
                    <Route path='/' exact component={CheesewichBuilder}/>
                    <Route path='/auth' component={Auth}/>
                    <Route path='/checkout' component={Checkout}/>
                    <Route path='/orders' component={Orders}/>
                    <Route path='/logout' component={Logout}/>
                </Switch>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState()),
    };
};

export default connect(null, mapDispatchToProps)(App);
