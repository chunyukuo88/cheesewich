import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import NavItems from './NavItems.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('NavItems()', ()=>{
    test('Component renders without crashing', ()=>{
        const wrapper = shallow(<NavItems />);
        expect(wrapper.length).toBe(1);
    });
    test('Component has two navigation items', ()=>{
        const wrapper = shallow(<NavItems />);
        const child = wrapper.find('NavigationItem');
        expect(child.length).toEqual(2);
    });
});