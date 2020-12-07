import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Button from './Button.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Button.jsx', () => {
    test('The component loads without crashing.', () => {
        const wrapper = shallow(<Button/>);
        expect(wrapper.length).toBe(1);
    });
});