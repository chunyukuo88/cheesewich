import React from 'react';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import * as utils from './userControlsUtils';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('getIngredientsDisplay()', ()=>{
    describe('WHEN: Given props and an ingredient array,', ()=>{
        test('It produces one quantity adjuster component for each ingredient.', ()=>{
            const props = {
                addIngredient: jest.fn(),
                removeIngredient: jest.fn(),
                disabled: {
                    shallots: true,
                    bacon: true,
                    cheese: true,
                    mustard: true,
                }
            };
            const result = utils.getIngredientsDisplay(props, utils.ingredients);
            expect(result.length).toEqual(4);
        });
    });
});