import * as utils from './builderUtils';

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
    describe('getPurchasabilityStatus()', ()=>{
        describe('WHEN: Given an ingredients object containing ingredients, ', ()=>{
            test('THEN: It returns TRUE, ', ()=>{
                const ingredients = {
                    testIngredient1: 1,
                    testIngredient2: 0
                };
                const result = utils.getPurchasabilityStatus(ingredients);
                expect(result).toBeTruthy();
            });
        });
        describe('WHEN: Given an ingredients object containing NO ingredients, ', ()=>{
            test('THEN: It returns FALSE, ', ()=>{
                const ingredients = {
                    testIngredient1: 0,
                    testIngredient2: 0
                };
                const result = utils.getPurchasabilityStatus(ingredients);
                expect(result).toBeFalsy();
            });
        });
    });
});
