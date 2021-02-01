import React from 'react';
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderSummary, {IngredientSummary} from './OrderSummary.jsx';
import { findByTestAttr } from '../../../utils/testUtils';

Enzyme.configure({ adapter: new Adapter()});

describe('OrderSummary.jsx', ()=>{
    describe('OrderSummary()', ()=>{
        test('Component renders without crashing', ()=>{
            const props = {
                ingredients: {
                    cheese: 1
                },
                price: 456,
                goToCheckout: jest.fn(),
                orderCancelled: jest.fn()
            }
            const wrapper = shallow(<OrderSummary {...props}/>);
            expect(wrapper.length).toBe(1);
        });
        describe('WHEN: Given an ingredients object, ', ()=>{
            test('THEN: It renders a list of ingredient items.', ()=>{
                const props = {
                    ingredients: {
                        olives: 1,
                        cheese: 2,
                        crunchybits: 3,
                        marinara: 4,
                    },
                    price: 1,
                };
                const wrapper = render(<OrderSummary {...props}/>);
                const li = findByTestAttr(wrapper, "li");
                expect(li.length).toEqual(4);

                //WORKS - Keep this for reference.
                // const ul = findByTestAttr(wrapper, "ul");
                // expect(ul.children().length).toEqual(1);

                //WORKS - Keep this for reference.
                // const summary = <IngredientSummary data-test="summary" {...props}/>;
                // expect(ul.containsMatchingElement(summary)).toBeTruthy();

                //WORKS - Keep this for reference.
                // expect(wrapper.children().length).toEqual(7)
            });
        });
    });
});
