import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.jsx';
import Layout from './hoc/Layout/Layout';
import { Redirect, Route, Switch } from 'react-router-dom';
import CheesewichBuilder from './containers/CheesewichBuilder/CheesewichBuilder';
import Checkout from './containers/Checkout/Checkout';
import Logout from './containers/Auth/Logout/Logout';
import Auth from './containers/Auth/Auth';
import Orders from './containers/Orders/Orders';

Enzyme.configure({ adapter: new Adapter() });

const props = {};
let wrapper;
beforeEach(()=>{
  wrapper = shallow(<App/>);
})

describe('App()', ()=>{
  it('renders without crashing', () => {
    expect(wrapper.length).toBe(1);
  });
  describe('WHEN: The user is authenticated,', ()=>{
    test('THEN: The authenticated routes are display,', ()=>{
      props.isAuthenticated = true;
      wrapper = shallow(<App {...props}/>);
      const expectedContent = (
          <Switch>
            <Route path='/' exact component={CheesewichBuilder}/>
            <Route path='/auth' component={Auth}/>
            <Redirect to='/'/>
          </Switch>
      );
      expect(wrapper.contains(expectedContent)).toBeTruthy();
    });
  });
  describe('WHEN: The user is NOT authenticated,', ()=>{
    test('THEN: The unauthenticated routes are display,', ()=>{
      const props = {
        isAuthenticated: false,
      };
      wrapper = shallow(<App {...props}/>);
      const expectedContent = <Route path='/orders' component={Orders}/>;
      expect(wrapper.contains(expectedContent)).toBeTruthy();
    });
  });
});
