import React, { useEffect } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import CheesewichBuilder from './containers/CheesewichBuilder/CheesewichBuilder.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import Orders from './containers/Orders/Orders.jsx';
import Auth from './containers/Auth/Auth.jsx';
import Logout from './containers/Auth/Logout/Logout';
import { connect } from 'react-redux';
import { authCheckState } from './store/actions/auth';

const App = (props) => {
    useEffect(() =>{
        props.onTryAutoSignup();
    }, [])

    return (
        <Layout>
            {routes(props.isAuthenticated)}
        </Layout>
    );
}

const routes = (theUserIsAuthenticated) => {
  return theUserIsAuthenticated
      ? authenticatedRoutes()
      : unauthenticatedRoutes();
};

const unauthenticatedRoutes = () => (
    <Switch>
        <Route path='/' exact component={CheesewichBuilder}/>
        <Route path='/auth' component={Auth}/>
        <Redirect to='/'/>
    </Switch>
);

const authenticatedRoutes = () => (
    <Switch>
        <Route path='/' exact component={CheesewichBuilder}/>
        <Route path='/checkout' component={Checkout}/>
        <Route path='/logout' component={Logout}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/orders' component={Orders}/>
        <Redirect to='/' />
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
