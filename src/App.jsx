import React, { Component } from 'react';
import Layout from './components/Layout/Layout.jsx';
import Cheesewich from './containers/CheesewichBuilder/CheesewichBuilder.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <p>Test</p>
          <Cheesewich/>
        </Layout>
      </div>
    );
  }
}

export default App;
