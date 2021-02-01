import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OrderSummary from './OrderSummary.jsx';

Enzyme.configure({ adapter: new Adapter()});

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
    describe('WHEN: ', ()=>{
        describe('THEN: ', ()=>{

        });
    });
});
