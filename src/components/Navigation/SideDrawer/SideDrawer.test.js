import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import SideDrawer from './SideDrawer.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('SideDrawer()', ()=>{
    test('Component renders without crashing.', ()=>{
        const wrapper = shallow(<SideDrawer />);
        expect(wrapper.length).toBe(1);
    });
    xdescribe('GIVEN: A props.open value of true, ', ()=>{
        test('THEN: It returns a classes.open value in the resultant array.', ()=>{
            const props = {
                open: true
            };
            const wrapper = render(<SideDrawer {...props}/>);
            console.log(wrapper);
        });
    });
});