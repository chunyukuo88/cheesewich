import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import UserControls from './UserControls.jsx';
import { findByTestAttr } from '../../../utils/testUtils';
import { ingredients, getIngredientsDisplay } from './userControlsUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});



describe('UserControls.jsx', ()=>{
    describe('UserControls()', ()=>{
        test('Component renders without crashing.', ()=>{
            const props = {
                price: 123
            };
            const wrapper = shallow(<UserControls {...props}/>);
            expect(wrapper.length).toBe(1);
        });
    });
    describe('WHEN: The user is authenticated,', ()=>{
        test('THEN: The button label says "Place order!",', ()=>{
            const props = {
                purchasable: true,
                price: 1,
                isAuth: true,
                disabled: false,
                addIngredient: jest.fn(),
                removeIngredient: jest.fn(),
            };
            const wrapper = render(<UserControls {...props}/>);
            const result = findByTestAttr(wrapper, 'user-controls-button').text();
            const expectedResult = 'Place order!';
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: The user is NOT authenticated,', ()=>{
        test('THEN: The button label says "Sign Up to Order",', ()=>{
            const props = {
                purchasable: true,
                price: 1,
                isAuth: false,
                disabled: false,
                addIngredient: jest.fn(),
                removeIngredient: jest.fn(),
            };
            const wrapper = render(<UserControls {...props}/>);
            const result = findByTestAttr(wrapper, 'user-controls-button').text();
            const expectedResult = 'Sign Up to Order';
            expect(result).toEqual(expectedResult);
        });
    });
});
