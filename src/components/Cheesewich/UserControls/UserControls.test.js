import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import UserControls from './UserControls.jsx';
import { findByTestAttr } from '../../../utils/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});

const props = {
    purchasable: true,
    price: 1,
    isAuth: false,
    disabled: false,
    addIngredient: jest.fn(),
    removeIngredient: jest.fn(),
};

describe('UserControls.jsx', ()=>{
    describe('UserControls()', ()=>{
        test('Component renders without crashing.', ()=>{
            const props = {
                price: 123,
                disabled: {
                    cheese: true,
                    crunchybits: true,
                    marinara: true,
                    olives: true,
                },
            };
            const wrapper = shallow(<UserControls {...props}/>);
            expect(wrapper.length).toBe(1);
        });
    });
    describe('WHEN: Given an addIngredient function and an array of ingredients,', ()=>{
       test('THEN: It can add that ingredient.', ()=>{
            //TODO:
           // Simulate click, then assert that the amount of
           // an ingredient has increased.
       });
    });
    describe('WHEN: The user is authenticated,', ()=>{
        test('THEN: The button label says "Place order!",', ()=>{
            props.isAuth = true;
            const wrapper = render(<UserControls {...props}/>);
            const result = findByTestAttr(wrapper, 'user-controls-button').text();
            const expectedResult = 'Place order!';
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: The user is NOT authenticated,', ()=>{
        test('THEN: The button label says "Sign Up to Order",', ()=>{
            props.isAuth = false;
            const wrapper = render(<UserControls {...props}/>);
            const result = findByTestAttr(wrapper, 'user-controls-button').text();
            const expectedResult = 'Sign Up to Order';
            expect(result).toEqual(expectedResult);
        });
    });
});
