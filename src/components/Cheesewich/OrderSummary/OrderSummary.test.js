import React from 'react';
import OrderSummary, { _getSummaryItem } from './OrderSummary.jsx';

describe('OrderSummary.jsx', ()=>{
    describe('_getSummaryItem()', ()=>{
        describe('WHEN: Given an ingredient string and an object of ingredients,', ()=>{
            test('THEN: It returns a list item with the ingredient name, key and quantity.', ()=>{
                const ingredients = {
                    cheese: 0,
                    shallots: 1,
                }
                const ingredient = 'shallots';
                const result = _getSummaryItem(ingredients, ingredient);
                const expectedResult = <li key={ingredient}>{ingredient}: {ingredients[ingredient]}</li>
                expect(result).toEqual(expectedResult);
            });
        });
    });
});