import axios from '../../../axios-instance';
import moxios from 'moxios';
import urls from '../../../urls';
import initIngredientsSaga from '../cheesewichBuilder';
import { put } from 'redux-saga/effects';
import { setFetchIngredientError, setIngredients } from '../../actions/cheesewichBuilder';

const { firebaseIngredients } = urls;

beforeEach(() => {
    moxios.install();
    moxios.stubRequest(firebaseIngredients, {
       status: 200,
       response: {
           data: { cheese: 0, olives: 0, crunchy: 0, marinara: 0 },
       },
    });
});
afterEach(() => {
    moxios.uninstall()
});

describe('initIngredientsSaga()', ()=>{
    test('On its first invocation, it gets the ingredients from the back end.', ()=>{
        const result = initIngredientsSaga();
        expect(result.next().value).toEqual(axios.get(urls.firebaseIngredients));
    });
    test('On its second invocation, it gets the ingredients from the back end.', ()=>{
        const result = initIngredientsSaga();
        result.next();
        setTimeout(() => {
            expect(1).toEqual(2);
        }, 1000);
    });
    describe('IF: There is an error,', ()=>{
        test('THEN: On its second invocation, it yields an error.', ()=>{
            const result = initIngredientsSaga();
            result.next();
            expect(result.next().value).toEqual(put(setFetchIngredientError()));
        });
    });
});
