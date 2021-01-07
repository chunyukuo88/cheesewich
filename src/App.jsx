import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
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
                {routes(this.props.isAuthenticated)}
            </Layout>
        );
    }
}

const routes = (isAuthenticated) => {
  return isAuthenticated
      ? <AuthenticatedRoutes />
      : <UnauthenticatedRoutes />;
};

const UnauthenticatedRoutes = () => (
    <Switch>
        <Route path='/' exact component={CheesewichBuilder}/>
        <Route path='/auth' component={Auth}/>
    </Switch>
);

const AuthenticatedRoutes = () => (
    <Switch>
        <Route path='/' exact component={CheesewichBuilder}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/orders' component={Orders}/>
    </Switch>
);

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignup: () => dispatch(authCheckState()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
