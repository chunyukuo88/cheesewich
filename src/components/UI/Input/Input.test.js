import React from 'react';
import Enzyme, { render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Input, { DropdownMenu } from './Input';
import { findByTestAttr } from '../../../utils/testUtils';
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
    describe('WHEN: The user has touched the input box and the input is VALID, ', ()=>{
        test('THEN: The input box is rendered WITHOUT invalid styling', ()=>{
            const props = {
                elementConfig: {
                    type: "text",
                    placeholder: "Your name"
                },
                elementType: 'input',
                changed: jest.fn(),
                value: '',
                label: 'test',
                invalid: false,
                shouldValidate: {
                    required: true,
                },
                touched: true,
            };
            const wrapper = render(<Input {...props}/>);
            expect(wrapper.find('input').hasClass(classes.InputElement)).toBeTruthy();
        });
    });
    describe('WHEN: The user has touched the input box and the input is invalid, ', ()=>{
        test('THEN: The input box is rendered with invalid styling', ()=>{
            const props = {
                elementConfig: {
                    type: "text",
                    placeholder: "Your name"
                },
                elementType: 'input',
                changed: jest.fn(),
                value: '',
                label: 'test',
                invalid: true,
                shouldValidate: {
                    required: true,
                },
                touched: true,
            };
            const wrapper = render(<Input {...props}/>);
            expect(wrapper.find('input').hasClass(classes.InputElement)).toBeTruthy();
            expect(wrapper.find('input').hasClass(classes.Invalid)).toBeTruthy();
        });
    });
    describe('WHEN: The user has not touched the input box, ', ()=>{
        test('THEN: The input box is rendered without invalid styling', ()=>{
            const props = {
                elementConfig: {
                    type: "text",
                    placeholder: "Your name"
                },
                elementType: 'input',
                changed: jest.fn(),
                value: '',
                label: 'test',
                invalid: false,
                shouldValidate: {
                    required: true,
                },
                touched: false,
            };
            const wrapper = render(<Input {...props}/>);
            expect(wrapper.find('input').hasClass(classes.InputElement)).toBeTruthy();
        });
    });
});
describe('getSelectMenu', ()=>{
   describe('WHEN: Given props and an array of classes', ()=>{
       test('THEN: It builds a dropdown menu', ()=>{
           const props = {
               elementConfig: {
                   options: [
                       {
                           value: 'foo',
                           displayValue: 'FOO',
                       },
                       {
                           value: 'bar',
                           displayValue: 'BAR',
                       },
                   ],
               },
               elementType: 'select',
               changed: jest.fn(),
               value: '',
               label: 'test',
               invalid: false,
               shouldValidate: {},
               touched: false,
           };
           const inputClasses = ['a', 'b'];
           const result = render(DropdownMenu(props, inputClasses));

        });
     });
});
