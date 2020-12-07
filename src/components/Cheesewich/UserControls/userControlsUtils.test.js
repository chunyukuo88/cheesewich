import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as utils from './userControlsUtils';
import QuantityAdjuster from './QuantityAdjuster/QuantityAdjuster.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('getIngredientsDisplay()', ()=>{
    describe('WHEN: Given props and an ingredient array,', ()=>{
        const props = {
            addIngredient: jest.fn(()=> 5555),
            removeIngredient: jest.fn(()=> 4444),
            disabled: {
                shallots: false,
                bacon: true,
                cheese: true,
                mustard: true,
            },
            price: 123,
            purchasable: true
        };

        test('It produces one quantity adjuster component for each ingredient.', ()=>{
            const result = utils.getIngredientsDisplay(props, utils.ingredients);
            expect(result.length).toEqual(4);
        });
        test('AND: The functions for adding and removing ingredients are passed to it.', ()=>{
            const result = utils.getIngredientsDisplay(props, utils.ingredients);
            expect(result[0].props.added()).toBe(5555);
            expect(result[0].props.removed()).toBe(4444);
        });
    });
});