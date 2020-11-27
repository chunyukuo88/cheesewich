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
    describe('checkForIngredients()', ()=>{
        describe('WHEN: Given an empty ingredientsArray and an ingredients variable,', ()=>{
            test('THEN: It sets the ingredients variable to the call-to-action string.', ()=>{
                const ingredientsArray = [];
                let ingredients;
                const result = OI.checkForIngredients(ingredientsArray, ingredients);
                const expectedResult = <div>Start adding the good stuff!</div>;
                expect(result).toEqual(expectedResult);
            })
        });
        describe('WHEN: Given an non-empty ingredientsArray and an ingredients variable,', ()=>{
            test('THEN: It sets the ingredients variable to the call-to-action string.', ()=>{
                const ingredientsArray = [['test', 'test']];
                let ingredients = 'test';
                const result = OI.checkForIngredients(ingredientsArray, ingredients);
                expect(result).toEqual(ingredients);
            })
        });
    });
    describe('reduceIngredients()', ()=>{
        describe('WHEN: Given an empty ingredientsArray,', ()=>{
            test('THEN: It returns an empty array.', ()=>{
                const ingredientsArray = [];
                const result = OI.reduceIngredients(ingredientsArray);
                expect(result).toEqual(ingredientsArray);
            });
        });
        describe('WHEN: Given a non-empty ingredientsArray,', ()=>{
            test('THEN: It returns a single, one-dimensional array of all ingredients.', ()=>{
                const ingredientsArray = [['foo', 'foo'], ['bar', 'bar']];
                const result = OI.reduceIngredients(ingredientsArray);
                const expectedResult = ['foo', 'foo', 'bar', 'bar'];
                expect(result).toEqual(expectedResult);
            });
        });
    });
});