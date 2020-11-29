import * as utils from './utils';
import INGREDIENT_PRICES from '../../components/Cheesewich/Ingredients/ingredientPrices';

INGREDIENT_PRICES['testIngredient1'] = 1.3;
INGREDIENT_PRICES['testIngredient2'] = 42.61;

describe('utils.js', ()=>{
    describe('additionFn()', ()=>{
        describe('WHEN: Given stateObject and an ingredient type, ', ()=>{
            const ing = {
                ingredients: { testIngredient1: 0, testIngredient2: 0 },
                totalPrice: 2,
                userCanOrder: false,
            };
            const result = utils.additionFn(ing, 'testIngredient1');
            test('THEN: The object it returns contains that ingredient\'s original amount plus one.', ()=>{
                expect(result.ingredients.testIngredient1).toEqual(1);
            });
            test('AND: The object it returns contains a userCanOrder value of "true"', ()=>{
                expect(result.userCanOrder).toEqual(true);
            });
            test('AND: The price increases accordingly.', ()=>{
                expect(result.totalPrice > ing.totalPrice).toEqual(true);
            });
        });
    });
    describe('removalFn()', ()=>{
        describe('WHEN: Given stateObject with at least one ingredient and an ingredient type, ', ()=>{
            const ing = {
                ingredients: { testIngredient1: 1, testIngredient2: 0 },
                totalPrice: 3.3,
                userCanOrder: true,
            };
            const result = utils.removalFn(ing, 'testIngredient1');
            test('THEN: The object it returns contains that ingredient\'s original amount minus one.', ()=>{
                expect(result.ingredients.testIngredient1).toEqual(0);
            });
            test('AND: The object it returns contains a userCanOrder value of "false" because ingredients should all be zero', ()=>{
                expect(result.userCanOrder).toEqual(false);
            });
            test('AND: The price drops to 2.', ()=>{
                expect(result.totalPrice).toBe(3.3 - 1.3);
            });
        });
        describe('WHEN: Given stateObject with no ingredients and an ingredient type, ', ()=>{
            const ings = {
                ingredients: { testIngredient1: 0, testIngredient2: 0 },
                totalPrice: 2,
                userCanOrder: false,
            };
            const removalResult = utils.removalFn(ings, 'testIngredient1');
            test('THEN: The quantities are unchanged, ', ()=>{
                expect(removalResult.ingredients.testIngredient1).toEqual(0);
                expect(removalResult.ingredients.testIngredient2).toEqual(0);
            });
            test('AND: The userCanOrder value is unchanged, ', ()=>{
                expect(removalResult.userCanOrder).toEqual(false);
            });
            test('AND: The price stays at 2.', ()=>{
                expect(removalResult.totalPrice).toEqual(2);
            });
        });
    });
    describe('produceDisabledInfoObject()', ()=>{
        describe('WHEN: Given an object of zero ingredients, ', ()=>{
            test('THEN: It replaces the zeroes with booleans (true) and returns the object.', ()=>{
                const ingredients = { 
                    testIngredient1: 0, 
                    testIngredient2: 0 
                };
                const result = utils.produceDisabledInfoObject(ingredients);
                expect(result.testIngredient1).toEqual(true);
                expect(result.testIngredient2).toEqual(true);
            });
        });
        describe('WHEN: Given an object of ingredients and their quantities, ', ()=>{
            test('THEN: It replaces the quantities with booleans (false) and returns the object.', ()=>{
                const ingredients = { 
                    testIngredient1: 3333, 
                    testIngredient2: 0 
                };
                const result = utils.produceDisabledInfoObject(ingredients);
                expect(result.testIngredient1).toEqual(false);
                expect(result.testIngredient2).toEqual(true);
            });
        });
    });
});