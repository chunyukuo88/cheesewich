import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MemoizedModal from './Modal.jsx';
import { render, screen } from '@testing-library/react';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Modal.jsx', () => {
    test('It loads without crashing.', () => {
        const wrapper = shallow(<MemoizedModal/>);
        expect(wrapper.length).toEqual(1);
    });
    describe('WHEN: Given props, then given a new set of props with a different set of values, ', ()=>{
       test('THEN: The component re-renders.', ()=>{
           const oldProps = {
                show: false,
                children: 'old children',
           };
           const newProps = {
               show: true,
               children: 'NEW children',
           };
           const { rerender } = render(<MemoizedModal {...oldProps}/>);
           expect(screen.getByTestId('children-container')).toHaveTextContent('old children');
           rerender(<MemoizedModal {...newProps}/>);
           expect(screen.getByTestId('children-container')).toHaveTextContent('NEW children');
       });
    });
    describe('WHEN: Given props, then the same props again, ', ()=>{
       test('THEN: The component does NOT rerender.', ()=>{

       });
    });
});
