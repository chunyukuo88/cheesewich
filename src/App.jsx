import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout.jsx';
import CheesewichBuilder from './containers/CheesewichBuilder/CheesewichBuilder.jsx';
import Checkout from './containers/Checkout/Checkout';

const App = () => (
    <Layout>
        <Switch>
            <Route path='/' exact component={CheesewichBuilder}/>
            <Route path='/checkout' component={Checkout}/>
        </Switch>
    </Layout>
);

export default App;
