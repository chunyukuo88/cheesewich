import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../utils/testUtils';
import Auth from './Auth.jsx';
import Provider from "react-redux";

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Auth()', ()=>{
    describe('WHEN: The user clicks the switch button, ', ()=>{
        test('THEN: It switches to "sign up"', ()=>{
            const wrapper = mount(
                <Provider>
                    <Auth/>
                </Provider>
            );
            const switcher = findByTestAttr(wrapper, 'switcher');
            expect(switcher.text()).toEqual('Switch to Sign up');
            switcher.simulate('click');
            expect(switcher.text()).toEqual('Switch to Sign in');
        });
    });
});
