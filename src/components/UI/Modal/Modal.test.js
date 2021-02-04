import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import MemoizedModal from './Modal.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Required to allow 'toHaveTextContent' to work.

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
               modalClosed: jest.fn(),
               children: 'old children',
           };
           const newProps = {
               show: true,
               modalClosed: jest.fn(),
               children: 'NEW children',
           };
           const { rerender } = render(<MemoizedModal {...oldProps}/>);
           //Two ways of making essentially the same assertion. I am keeping these here for reference.
           expect(screen.getByTestId('children-container').textContent).toBe('old children');
           expect(screen.getByTestId('children-container')).toHaveTextContent('old children');
           rerender(<MemoizedModal {...newProps}/>);
           expect(screen.getByTestId('children-container')).toHaveTextContent('NEW children');
       });
    });
    describe('WHEN: Given props, then the same props again, ', ()=>{
       test('THEN: The component does NOT rerender.', ()=>{
           const oldProps = {
               show: false,
               modalClosed: jest.fn(),
               children: 'old children',
           };
           const newProps = {
               show: false,
               modalClosed: jest.fn(),
               children: 'old children',
           };
           const { rerender } = render(<MemoizedModal {...oldProps}/>);
           expect(screen.getByTestId('children-container').textContent).toBe('old children');
           rerender(<MemoizedModal {...newProps}/>);
           expect(screen.getByTestId('children-container')).toHaveTextContent('old children');
       });
    });
});
