import axios from '../../axios-instance';
import { put } from 'redux-saga/effects';
import urls from '../../urls';
import { setFetchIngredientError, setIngredients } from '../actions/cheesewichBuilder';

const { firebaseIngredients } = urls;

export default function* initIngredientsSaga () {
    const response = yield axios.get(firebaseIngredients);
    try {
        yield put(setIngredients(response.data));
    } catch (error) {
        yield put(setFetchIngredientError());
    };
};
