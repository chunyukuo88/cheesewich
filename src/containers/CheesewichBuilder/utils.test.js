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
    describe('_updateQuantitiesFollowingAddition()', ()=>{
        describe('WHEN: Given stateObject and an ingredient type, ', ()=>{
            test('THEN: The object it returns contains that ingredient\'s original amount plus one.', ()=>{

            });
        });
    });
    describe('_orderButtonIsDisabled()', ()=>{
        describe('WHEN: Given an ingredients object containing , ', ()=>{
            test('THEN: It returns false.', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
    describe('()', ()=>{
        describe('WHEN: ', ()=>{
            test('THEN: ', ()=>{

            });
        });
    });
});