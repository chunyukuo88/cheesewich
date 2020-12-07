import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import QuantityAdjuster from './QuantityAdjuster.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('QuantityAdjuster()', ()=>{
    test('Component renders without crashing.', ()=>{
        const wrapper = shallow(<QuantityAdjuster />);
        expect(wrapper.length).toBe(1);
    })
});