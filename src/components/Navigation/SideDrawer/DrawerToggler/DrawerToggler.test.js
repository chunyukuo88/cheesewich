import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import DrawerToggler from './DrawerToggler.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const props = {
    openDrawer: true
};

describe('DrawerToggler.jsx', () => {
    test('The component loads without crashing.', () => {
        const wrapper = shallow(<DrawerToggler {...props}/>);
        expect(wrapper.length).toBe(1);
    });
});