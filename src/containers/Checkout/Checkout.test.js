import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Checkout from './Checkout';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Checkout.js', ()=>{
    describe('Checkout()', ()=>{
        test('It renders without crashing', ()=>{
           const wrapper = shallow(<Checkout/>);
           expect(wrapper.length).toEqual(1);
        });
    });
});
