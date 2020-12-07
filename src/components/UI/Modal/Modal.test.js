import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Modal from './Modal.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Modal.jsx', () => {
    test('It loads without crashing.', () => {
        const wrapper = shallow(<Modal/>);
        expect(wrapper.length).toEqual(1);
    });
});