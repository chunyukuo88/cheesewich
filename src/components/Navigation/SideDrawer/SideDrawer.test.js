import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideDrawer, { getClasses } from './SideDrawer.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('SideDrawer()', ()=>{
    test('Component renders without crashing.', ()=>{
        const wrapper = shallow(<SideDrawer />);
        expect(wrapper.length).toBe(1);
    });
});

describe('getClasses()', ()=>{
    describe('GIVEN: A props.open value of true, ', ()=>{
        test('THEN: It returns a classes.open value in the resultant array.', ()=>{
            const props = {
                open: true
            };
            const result = getClasses(props);
            const expectedResult = ['side_drawer', 'open'];
            expect(result).toEqual(expectedResult);
        });
    });
    describe('GIVEN: A props.open value of false, ', ()=>{
        test('THEN: It returns a classes.closed value in the resultant array.', ()=>{
            const props = {
                open: false
            };
            const result = getClasses(props);
            const expectedResult = ['side_drawer', 'closed'];
            expect(result).toEqual(expectedResult);
        });
    });
});