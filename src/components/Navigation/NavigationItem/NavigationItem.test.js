import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NavigationItem, { isActive } from './NavigationItem.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('NavigationItem()', ()=>{
    test('Component renders without crashing.', ()=>{
        const wrapper = shallow(<NavigationItem/>);
        expect(wrapper.length).toBe(1);
    });
});

describe('isActive()', ()=>{
    describe('WHEN: Given props with an active value of TRUE', ()=>{
        test('THEN: Return an active class from the NavigationItem.css module.', ()=>{
            const props = {
                active: true
            };
            const result = isActive(props);
            expect(result).toBe('active');
        });
    });
    describe('WHEN: Given props with an active value of FALSE', ()=>{
        test('THEN: Return null', ()=>{
            const props = {
                active: false
            };
            const result = isActive(props);
            expect(result).toBeNull();
        });
    });
});