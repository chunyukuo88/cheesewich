import axios from '../../axios-instance';
import { put } from 'redux-saga/effects';
import urls from '../../urls';
import { setFetchIngredientError, setIngredients } from '../actions/cheesewichBuilder';

export function* initIngredientsSaga () {
    const response = yield axios.get(urls.firebaseIngredients);
    try {
        yield put(setIngredients(response.data));
    } catch (error) {
        yield put(setFetchIngredientError());
    };
};
