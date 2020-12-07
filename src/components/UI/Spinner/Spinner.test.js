import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Spinner.jsx', () => {
    test('It loads without crashing.', () => {
        const wrapper = shallow(<Spinner/>);
        expect(wrapper.length).toEqual(1);
    });
});
