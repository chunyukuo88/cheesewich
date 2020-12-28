import React from 'react';
import * as utils from './contactDataUtils';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import Button from "../../../components/UI/Button/Button";
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const formElementsArray = [
    {elementConfig: {}},
    {elementConfig: {}},
];

describe('contactDataUtils.js', ()=>{
    describe('buildForm()', ()=>{
        describe('WHEN: Given state, an inputChangedHandler, and a formElementsArray', ()=>{
            describe('AND: The state includes a "loading" value of TRUE', ()=>{
                test('THEN: It returns a Spinner component.', ()=>{
                    const state = {
                        loading: true,
                    };
                    const result = utils.buildForm(state);
                    const expectedResult = <Spinner/>;
                    expect(result).toEqual(expectedResult);
                });
            });
            // describe('AND: The state includes a "loading" value of FALSE and the form is valid,', ()=>{
            //     test('THEN: It returns a form component with an enabled button.', ()=>{
            //         //TODO: fix this test
            //         const state = {
            //             loading: false,
            //             formIsValid: true,
            //         };
            //         const inputChangedHandler = jest.fn();
            //         const orderHandler = jest.fn();
            //         const result = utils.buildForm(state, inputChangedHandler, orderHandler, formElementsArray);
            //         const wrapper = render(result);
            //         console.log(wrapper);
            //         expect(wrapper.children).toEqual('fix this test');
            //     });
            // });
        });
    });
    describe('checkValidity()', ()=>{
        describe('WHEN: Given a  value and no rules object, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const rules = {};
                const result = utils.checkValidity(value, rules);
                const expectedResult = true;
                expect(result).toEqual(expectedResult);
            });
        });
        describe('WHEN: Given a value and a rules object with required = true, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const rules = {
                    required: true,
                };
                const result = utils.checkValidity(value, rules);
                const expectedResult = true;
                expect(result).toEqual(expectedResult);
            });
        });
        describe('WHEN: Given a value that does not meet minimum length requirements, ', ()=>{
            test('THEN: It returns FALSE.', ()=>{
                const value = '';
                const rules = {
                    required: true,
                    minLength: 5,
                };
                const result = utils.checkValidity(value, rules);
                const expectedResult = false;
                expect(result).toEqual(expectedResult);
            });
        });
        describe('WHEN: Given a value that does not meet maximum length requirements, ', ()=>{
            test('THEN: It returns FALSE.', ()=>{
                const value = 'asdf';
                const rules = {
                    required: true,
                    maxLength: 3,
                };
                const result = utils.checkValidity(value, rules);
                const expectedResult = false;
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('buildInputFieldObject()', ()=>{
        describe('WHEN: Given valid arguments, ', ()=>{
            test('THEN: It returns an object containing input field data.', ()=>{
               const placeholder = 'test';
               const minLength = 1;
               const maxLength = 4;
               const type = 'input';

                const result = utils.buildInputFieldObject(placeholder, minLength, maxLength, type);
                const expectedResult = {
                    elementType: 'input',
                    elementConfig: {
                        type: type,
                        placeholder: placeholder,
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: minLength,
                        maxLength: maxLength
                    },
                    valid: false,
                    touched: false,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('mapOrderFormToArray()', ()=>{
        describe('WHEN: Given anorderFormObject, ', ()=>{
            test('THEN: It returns an array of form elements.', ()=>{
                const orderFormObject = {
                    'test1': 'foo',
                    'test2': 'bar',
                };
                const result = utils.mapOrderFormToArray(orderFormObject);
                const expectedResult = [
                    {
                    "config": "foo", 
                    "id": "test1"
                    }, 
                    {
                    "config": "bar", 
                    "id": "test2"
                    },
                ];
                expect(result).toEqual(expectedResult);
            });
        });
    });
});