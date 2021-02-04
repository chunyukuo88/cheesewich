import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MemoizedModal from './Modal.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Modal.jsx', () => {
    test('It loads without crashing.', () => {
        const wrapper = shallow(<MemoizedModal/>);
        expect(wrapper.length).toEqual(1);
    });
    describe('WHEN: Given props, then given a new set of props with a different set of values, ', ()=>{
       test('THEN: The component rerenders.', ()=>{

       });
    });
    describe('WHEN: Given props, then the same props again, ', ()=>{
       test('THEN: The component does NOT rerender.', ()=>{

       });
    });
});
