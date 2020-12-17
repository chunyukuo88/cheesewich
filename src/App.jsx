import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import CheesewichBuilder from './containers/CheesewichBuilder/CheesewichBuilder.jsx';
import Checkout from './containers/Checkout/Checkout.jsx';
import Orders from './containers/Orders/Orders.jsx'l

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={CheesewichBuilder}/>
            <Route path='/checkout' component={Checkout}/>
            <Route path='/orders' component={Orders}/>
        </Switch>
    </Layout>
);

export default App;
