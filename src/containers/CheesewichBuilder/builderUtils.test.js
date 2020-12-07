import React from 'react';
import * as utils from './builderUtils';
import Spinner from '../../components/UI/Spinner/Spinner.jsx';
import OrderSummary from '../../components/Cheesewich/OrderSummary/OrderSummary.jsx';
import INGREDIENT_PRICES from '../../components/Cheesewich/Ingredients/ingredientPrices';

describe('utils.js', ()=>{
    describe('getOrderDataForCheckout()', ()=>{
        test('Maps state fields and customer info to an object and returns it.', ()=>{
            const state = {
                ingredients: [],
                totalPrice: 1234
            };
            const customerInfo = 'test';
            const result = utils.getOrderDataForCheckout(state, customerInfo);
            const expectedResult = {
                ingredients: [],
                price: 1234,
                customer: 'test'
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('showSpinnerOrSummary()', ()=>{
        describe('GIVEN: A state with a loading field set to TRUE, ', ()=>{
            test('THEN: It returns a loading spinner.', ()=>{
                const state = {
                    loading: true
                };
                const result = utils.showSpinnerOrSummary(state);
                jest.mock('../../components/UI/Spinner/Spinner.jsx');
                const expectedResult = <Spinner/>;
                expect(result).toEqual(expectedResult);
            });
        });
        describe('GIVEN: A state with a loading field set to FALSE, ', ()=>{
            test('THEN: It returns the OrderSummary.', ()=>{
                const state = {
                    loading: false,
                    totalPrice: 1234
                };
                const cancelFn = jest.fn();
                const gotoCheckoutFn = jest.fn();
                const result = utils.showSpinnerOrSummary(state, cancelFn, gotoCheckoutFn);
                jest.mock('../../components/Cheesewich/OrderSummary/OrderSummary.jsx');
                const expectedResult = <OrderSummary ingredients={state.ingredients}
                                                     orderCancelled={cancelFn}
                                                     goToCheckout={gotoCheckoutFn}
                                                     price={state.totalPrice}/>;
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('additionFn()', ()=>{
        INGREDIENT_PRICES['testIngredient1'] = 1.35;
        INGREDIENT_PRICES['testIngredient2'] = 42.61;
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
            INGREDIENT_PRICES['testIngredient1'] = 1.3;
            INGREDIENT_PRICES['testIngredient2'] = 42.61;
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
        describe('WHEN: Given an ingredient type and a stateObject with no ingredients, ', ()=>{
            delete INGREDIENT_PRICES['testIngredient1'];
            delete INGREDIENT_PRICES['testIngredient2'];
            const ings = {
                ingredients: { shallots: 0, cheese: 0 },
                totalPrice: 2,
                userCanOrder: false,
            };
            const removalResult = utils.removalFn(ings, 'Shallots');
            test('THEN: The quantities are unchanged, ', ()=>{
                expect(removalResult.ingredients.shallots).toEqual(0);
                expect(removalResult.ingredients.cheese).toEqual(0);
            });
            test('AND: The userCanOrder value is unchanged, ', ()=>{
                expect(removalResult.userCanOrder).toEqual(false);
            });
            test('AND: The price is unchanged.', ()=>{
                const thePrice = removalResult.totalPrice;
                expect(thePrice).toEqual(ings.totalPrice);
            });
        });
        describe('WHEN: Given an ingredient type and a stateObject a price below 2, ', ()=>{
            delete INGREDIENT_PRICES['testIngredient1'];
            delete INGREDIENT_PRICES['testIngredient2'];
            const ings = {
                ingredients: { shallots: 0, cheese: 0 },
                totalPrice: 1,
                userCanOrder: false,
            };
            const removalResult = utils.removalFn(ings, 'Shallots');
            test('AND: The price is set to 2.', ()=>{
                const thePrice = removalResult.totalPrice;
                expect(thePrice).toEqual(2);
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
    describe('_updateQuantitiesFollowingRemoval()', ()=>{
        describe('WHEN: Given a stateObject with no ingredients and a type', ()=>{
            test('THEN: Return nothing', ()=>{
                const ings = {
                    ingredients: { shallots: 0 },
                    totalPrice: 2,
                    userCanOrder: false,
                };
                const result = utils._updateQuantitiesFollowingRemoval(ings, 'shallots');
                expect(result).toBeUndefined();
            });
        });
    });
});