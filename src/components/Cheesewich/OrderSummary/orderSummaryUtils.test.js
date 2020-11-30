import React from 'react';
import * as utils from './orderSummaryUtils.js';

describe('utils.js', ()=>{
    const ingredients = {
        cheese: 0,
        shallots: 1,
    };
    describe('_getSummaryItem()', ()=>{
        describe('WHEN: Given an ingredient string and an object of ingredients,', ()=>{
            test('THEN: It returns a list item with the ingredient name, key and quantity.', ()=>{
                const ingredient = 'shallots';
                const result = utils._getSummaryItem(ingredients, ingredient);
                const expectedResult = <li key={ingredient}>{ingredient}: {ingredients[ingredient]}</li>;
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('_getIngredientSummary()', ()=>{
        describe('WHEN: Given an ingredients object,', ()=>{
            test('THEN: It maps out all of the ingredient summary items.', ()=>{
                const result = utils._getIngredientSummary(ingredients);
                expect(result.length).toEqual(2);
            });
        });
    });
});