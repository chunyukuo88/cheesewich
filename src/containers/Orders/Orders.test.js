import React from 'react';
import Orders from './Orders.jsx';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Orders.js', ()=>{
    describe('Orders()', ()=>{
        test('It renders without crashing', ()=>{
            const wrapper = shallow(<Orders/>);
            expect(wrapper.length).toEqual(1);
        });
    });
});
