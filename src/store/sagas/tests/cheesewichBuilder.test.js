import axios from '../../../axios-instance';
import urls from '../../../urls';
import { put } from 'redux-saga/effects';
import initIngredientsSaga from '../cheesewichBuilder';
import { setFetchIngredientError } from '../../actions/cheesewichBuilder';

describe('initIngredientsSaga()', ()=>{
    test('On its first invocation, it gets the ingredients from the back end.', ()=>{
        const result = initIngredientsSaga();
        expect(result.next().value).toEqual(axios.get(urls.firebaseIngredients));
    });
    // test('On its second invocation, it gets the ingredients from the back end.', ()=>{
    //     const result = initIngredientsSaga();
    //     result.next();
    //     expect(result.next().value).toEqual(axios.get(urls.firebaseIngredients));
    // });
    // test('On its third invocation, it yields an error.', ()=>{
    //     const result = initIngredientsSaga();
    //     result.next();
    //     result.next();
    //     expect(result.next().value).toEqual(put(setFetchIngredientError()));
    // });
});
