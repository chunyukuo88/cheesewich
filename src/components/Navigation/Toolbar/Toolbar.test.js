import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Toolbar from './Toolbar.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Toolbar.jsx', () => {
    test('The component loads without crashing.', () => {
        const wrapper = shallow(<Toolbar/>);
        expect(wrapper.length).toBe(1);
    });
});