import React from 'react';
import Layout from './hoc/Layout/Layout.jsx';
import Cheesewich from './containers/CheesewichBuilder/CheesewichBuilder.jsx';

const App = () => (
  <div>
    <Layout>
        <Cheesewich/>
    </Layout>
  </div>
);

export default App;
