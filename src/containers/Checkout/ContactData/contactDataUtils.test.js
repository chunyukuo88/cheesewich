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