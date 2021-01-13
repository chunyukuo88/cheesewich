import { addIngredient,
        nixIngredient,
        setFetchIngredientError,
        setIngredients,
        initIngredients } from '../cheesewichBuilder';
import { BUILDER_ACTIONS } from '../actionTypes';

describe('cheesewichBuilder.js', ()=>{
    describe('addIngredient()', ()=>{
        test('WHEN: Given an ingredient name, it builds the action accordingly.', ()=>{
            const ingName = 'asdfasdf';
            const result = addIngredient(ingName);
            const expectedResult = {
                type: BUILDER_ACTIONS.ADD_INGREDIENT,
                ingredientName: ingName,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('nixIngredient()', ()=>{
        test('WHEN: Given an ingredient name, it builds the action accordingly.', ()=>{
            const ingName = 'jkl;jkl;';
            const result = nixIngredient(ingName);
            const expectedResult = {
                type: BUILDER_ACTIONS.NIX_INGREDIENT,
                ingredientName: ingName,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('setFetchIngredientError()', ()=>{
        test('WHEN: Invoked, it builds the action accordingly.', ()=>{
            const result = setFetchIngredientError();
            const expectedResult = {
                type: BUILDER_ACTIONS.FETCH_INGREDIENTS_FAILED,
                error: true,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('setIngredients()', ()=>{
        test('WHEN: Given ingredients, it builds the action accordingly.', ()=>{
            const fetchedIngredients = {};
            const result = setIngredients(fetchedIngredients);
            const expectedResult = {
                type: BUILDER_ACTIONS.SET_INGREDIENTS,
                ingredients: fetchedIngredients,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('initIngredients()', ()=>{
        test('WHEN: Invoked, it builds the action accordingly.', ()=>{
            const result = initIngredients();
            const expectedResult = {
                type: BUILDER_ACTIONS.FETCH_INGREDIENTS_INIT,
            };
            expect(result).toEqual(expectedResult);
        });
    });
});
