import React from 'react';
import * as utils from './contactDataUtils';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const formElementsArray = [
    {id: "name",
     config: {
             elementConfig: {
                 placeholder: "Your name",
                 type: "text",
             },
             elementType: "input",
             touched: false,
             valid: false,
             validation: {
                 required: true
             },
             value: '',
         },
     },
];

describe('contactDataUtils.js', ()=>{
    describe('buildFormData()', ()=>{
        describe('WHEN: Given state containing an orderForm object, ', ()=>{
            test('THEN: It returns an object containing form data, ', ()=>{
                const state = {
                    orderForm: {
                      test1: { value: 'foo'},
                      test2: { value: 'bar'},
                    },
                };
                const result = utils.buildFormData(state);
                const expectedResult = {
                    test1: 'foo',
                    test2: 'bar',
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
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
            describe('AND: The state includes a "loading" value of FALSE and the form is valid,', ()=>{
                test('THEN: It returns a form component with an enabled button.', ()=>{
                    const state = {
                        loading: false,
                        formIsValid: true,
                    };
                    const inputChangedHandler = jest.fn();
                    const orderHandler = jest.fn();
                    const result = utils.buildForm(state, inputChangedHandler, orderHandler, formElementsArray);
                    expect(result).not.toEqual(<Spinner/>);
                });
            });
        });
    });
    describe('checkValidity()', ()=>{
        describe('WHEN: Given a  value and an empty rules object, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const rules = {};
                const result = utils.checkValidity(value, rules);
                expect(result).toBeTruthy();
            });
        });
        describe('WHEN: Given a  value and no rules object, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const result = utils.checkValidity(value);
                expect(result).toBeTruthy();
            });
        });
        describe('WHEN: Given a value and a rules object with required = true, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const rules = {
                    required: true,
                };
                const result = utils.checkValidity(value, rules);
                expect(result).toBeTruthy();
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
                expect(result).toBeFalsy();
            });
        });
        describe('WHEN: Given a value that meets minimum length requirements, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'asdfasdfasdf';
                const rules = {
                    required: true,
                    minLength: 5,
                };
                const result = utils.checkValidity(value, rules);
                expect(result).toBeTruthy();
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
                expect(result).toBeFalsy();
            });
        });
        describe('WHEN: Given a value that meets maximum length requirements, ', ()=>{
            test('THEN: It returns TRUE.', ()=>{
                const value = 'a';
                const rules = {
                    required: true,
                    maxLength: 3,
                };
                const result = utils.checkValidity(value, rules);
                expect(result).toBeTruthy();
            });
        });
    });
    describe('buildInputFieldObject()', ()=>{
        describe('WHEN: Given arguments containing minLength, maxLength, and type, ', ()=>{
            test('THEN: It returns an object containing that input field data.', ()=>{
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
        describe('WHEN: Given arguments without minLength, maxLength, or type, ', ()=>{
            test('THEN: It returns an object containing all the other input field data.', ()=>{
               const placeholder = 'test';

                const result = utils.buildInputFieldObject(placeholder);
                const expectedResult = {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: placeholder,
                    },
                    value: '',
                    validation: {
                        required: true,
                    },
                    valid: false,
                    touched: false,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('mapOrderFormToArray()', ()=>{
        describe('WHEN: Given an orderFormObject, ', ()=>{
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
    describe('buildOrderForAxios()', ()=>{
        describe('WHEN: Given ingredients, price, and formData, ', ()=>{
            test('THEN: It maps them to an object.', ()=>{
                const props = {
                    ingredients: {
                        ing1: 'ing1',
                        ing2: 'ing2'
                    },
                    price: 1234,
                };
                const formData = {
                    test: 'test'
                };
                const result = utils.buildOrderForAxios(props, formData);
                const expectedResult = {
                    ingredients: props.ingredients,
                    price: props.price,
                    orderData: formData,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('getDeliveryMethodObject()', ()=>{
        test('It returns a deliveryMethodObject.', ()=>{
            const result = utils.getDeliveryMethodObject();
            const expectedResult = {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            };;
            expect(result).toEqual(expectedResult);
        });
    });
});
