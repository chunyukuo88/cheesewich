import React from 'react';
import * as OI from './OptionalIngredients';
import Ingredient from '../../components/Cheesewich/Ingredients/Ingredients.jsx';

describe('OptionalIngredients.js', ()=>{
    describe('OptionalIngredients()', ()=>{
        describe('WHEN: Given an ingredients object,', ()=>{
            test('THEN: It returns an array of arrays, each inner array representing an ingredient.', ()=>{
                const ingredients = {
                    'salad': 0,
                    'cheese': 2
                };
                const result = OI.OptionalIngredients(ingredients);
                expect(result[1].length).toEqual(2);
            })
        });
    });
    describe('_buildArrayOfSingleIngredient()', ()=>{
        describe('WHEN: Given an ingredients object and a key,', ()=>{
            test('THEN: It returns an array containing the number of that Ingredient.', ()=>{
                const ingredients = {
                    'salad': 0,
                    'cheese': 2
                };
                const key = 'cheese';
                const result = OI._buildArrayOfSingleIngredient(ingredients, key);
                expect(result.length).toEqual(2);
            })
        });
    });
    describe('_buildIngredient()', ()=>{
        describe('WHEN: Given a key (ingredient string) and an integer,', ()=>{
            test('THEN: It returns an instance of that Ingredient with a key.', ()=>{
                const key = 'meat';
                const integer = 0;
                const result = OI._buildIngredient(key, integer);
                const expectedResult = <Ingredient key={key + integer} type={key}/>;
                expect(result).toEqual(expectedResult);
            })
        });
    });
});