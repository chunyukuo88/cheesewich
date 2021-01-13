import reducer from '../cheesewichBuilder';
import { BUILDER_ACTIONS } from '../../actions/actionTypes';

const initialState = {
    ingredients: null,
    price: 0,
    error: false,
    cheesewichIsBeingBuilt: false
};

describe('reducer()', ()=>{
    describe('WHEN: Given an invalid action,', ()=>{
        test('THEN: It returns the state it was given.', ()=> {
            const action = {};
            const result = reducer(initialState, action);
            expect(result).toEqual(initialState);
        });
    });
    describe('WHEN: Given NO state,', ()=>{
        test('THEN: It returns the initial state.', ()=> {
            const action = {};
            const result = reducer(undefined, action);
            expect(result).toEqual(initialState);
        });
    });
    describe('WHEN: Given an action type of ADD_INGREDIENT,', ()=>{
        test('THEN: It increments the amount of the ingredient and ups the price.', ()=> {
            const action = {
                type: BUILDER_ACTIONS.ADD_INGREDIENT,
                ingredientName: 'bacon'
            };
            initialState.ingredients = {
                bacon: 0,
                cheese: 0,
                mustard: 0,
                shallots: 0,
            }
            const result = reducer(initialState, action);
            const expectedResult = {
                ingredients: {
                    bacon: 1,
                    cheese: 0,
                    mustard: 0,
                    shallots: 0,
                },
                price: 0.5,
                error: false,
                cheesewichIsBeingBuilt: true
            }
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of NIX_INGREDIENT,', ()=>{
        test('THEN: It decrements the ingredient and reduces the price accordingly.', ()=> {
            initialState.ingredients = {
                bacon: 10,
                cheese: 0,
                mustard: 0,
                shallots: 0,
            }
            initialState.price = 5;
            const action = {
                type: BUILDER_ACTIONS.NIX_INGREDIENT,
                ingredientName: 'bacon'
            };
            const result = reducer(initialState, action);
            const expectedResult = {
                ingredients: {
                    bacon: 9,
                    cheese: 0,
                    mustard: 0,
                    shallots: 0,
                },
                price: 4.5,
                error: false,
                cheesewichIsBeingBuilt: true
            }
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of SET_INGREDIENTS,', ()=>{
        test('THEN: It resets the ingredients.', ()=> {
            initialState.ingredients = {
                bacon: 0,
                cheese: 0,
                mustard: 0,
                shallots: 0,
            };
            initialState.price = 0;
            const action = {
                type: BUILDER_ACTIONS.SET_INGREDIENTS,
                ingredients: {
                    bacon: 0,
                    cheese: 0,
                    mustard: 0,
                    shallots: 0,
                }
            };
            const result = reducer(initialState, action);
            expect(result).toEqual(initialState);
        });
    });
    describe('WHEN: Given an action type of FETCH_INGREDIENTS_FAILED,', ()=>{
        test('THEN: It decrements the ingredient and reduces the price accordingly.', ()=> {
            const action = {
                type: BUILDER_ACTIONS.FETCH_INGREDIENTS_FAILED,
            };
            const result = reducer(initialState, action);
            initialState.error = true;
            expect(result).toEqual(initialState);
        });
    });
});
