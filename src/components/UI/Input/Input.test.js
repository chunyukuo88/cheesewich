import React from 'react';
import Enzyme, { render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input from './Input';
import {findByTestAttr} from "../../../utils/testUtils";
import classes from './Input.css';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Input.jsx', ()=>{
   test('It renders without crashing', ()=>{
       const wrapper = render(<Input/>);
       expect(wrapper.length).toBe(1);
   });
    describe('WHEN: Given a label, ', ()=>{
        test('THEN: The label is rendered', ()=>{
            const wrapper = render(<Input/>);
            const inputLabel = findByTestAttr(wrapper, 'inputLabel');
            expect(inputLabel.length).toBe(1);
        });
    });
    describe('WHEN: The user has touched the input box but the input is invalid, ', ()=>{
        test('THEN: The input box is rendered with invalid styling', ()=>{
            const props = {
                elementType: 'textarea',
                label: 'test',
                invalid: true,
                shouldValidate: true,
                touched: true,
            };
            const wrapper = render(<Input {...props}/>);
            const inputElement = findByTestAttr(wrapper, 'inputElement');
            // const expectedClass = 'Input__InputElement__-hash-/\d\d/-/\d/- Input__Invalid__-hash-/\d\d/-/\d/-';
            const expectedClass = 'InputElement Invalid';
            expect(inputElement.hasClass(expectedClass)).toBeTruthy();
        });
    });
    describe('WHEN: The user has touched the input box and the input is valid, ', ()=>{
        test('THEN: The input box is rendered WITHOUT invalid styling', ()=>{

        });
    });
    describe('WHEN: The input type is not given, ', ()=>{
        test('THEN: The an input element is returned by default', ()=>{
            const props = {
                elementType: undefined,
                label: 'test',
                invalid: true,
                shouldValidate: true,
                touched: true,
            };
            const wrapper = render(<Input {...props}/>);
            const inputElement = findByTestAttr(wrapper, 'inputElement');
            const expectedClass = 'Label';
            expect(inputElement.hasClass(expectedClass)).toBeTruthy();
        });
    });
});
