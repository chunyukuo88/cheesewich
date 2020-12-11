import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import CheckoutSummary from './CheckoutSummary';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('CheckoutSummary.js', ()=>{
    describe('CheckoutSummary()', ()=>{
        test('It renders without crashing', ()=>{
            const wrapper = shallow(<CheckoutSummary/>);
            expect(wrapper.length).toEqual(1);
        });
    });
});
