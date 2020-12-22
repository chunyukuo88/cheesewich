import React from 'react';
import Enzyme, { render } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Order from './Order.jsx';
import { findByTestAttr } from '../../utils/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Order()', ()=>{
   test('It renders without crashing', ()=>{
       const wrapper = render(<Order/>);
       expect(wrapper.length).toBe(1);
   }) ;
   describe('WHEN: Given an ingredients,', ()=>{
       const props = {
           ingredients: {
               cheese: 1,
               shallots: 1,
               horseradish: 2
           },
           price: 9001
       };
       test('THEN: It renders the ingredients and their amounts.', ()=>{
           const wrapper = render(<Order {...props}/>);
           const ingredientItems = findByTestAttr(wrapper, 'orderIngredient');
           expect(ingredientItems.length).toBe(3);
       });
       test('AND: It renders the price.', ()=>{
           const wrapper = render(<Order {...props}/>);
           const orderPrice = findByTestAttr(wrapper, 'orderPrice');
           expect(orderPrice.text()).toEqual('$9001');
        });
   });
});
