import { all, takeEvery, takeLatest } from 'redux-saga/effects';
import { watchAuth, watchBuilder, watchOrder } from '../index';
import {AUTH_ACTIONS, BUILDER_ACTIONS, ORDER_ACTIONS} from '../../actions/actionTypes';
import initIngredientsSaga from '../cheesewichBuilder';
import {fetchOrdersSaga, purchaseCheesewichSaga} from '../order';
import {authCheckStateSaga, authenticateUserSaga, checkAuthTimeoutSaga, logoutSaga} from "../auth";

describe('sagas/index.js', ()=>{
    describe('watchAuth()', ()=>{
        test('It should watch for all four actions listed in the effects array and execute their corresponding sagas.', ()=>{
            const generatedObject = watchAuth();
            const expectedResult1of4 = takeEvery(AUTH_ACTIONS.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
            const expectedResult2of4 = takeEvery(AUTH_ACTIONS.AUTH_INITIATE_LOGOUT, logoutSaga);
            const expectedResult3of4 = takeEvery(AUTH_ACTIONS.AUTH_USER, authenticateUserSaga);
            const expectedResult4of4 = takeEvery(AUTH_ACTIONS.AUTH_CHECK_STATE, authCheckStateSaga);

            expect(generatedObject.next().value).toEqual(expectedResult1of4);
            expect(generatedObject.next().value).toEqual(expectedResult2of4);
            expect(generatedObject.next().value).toEqual(expectedResult3of4);
            expect(generatedObject.next().value).toEqual(expectedResult4of4);
        });
    });
    describe('watchBuilder()', ()=>{
        test('It should watch for every FETCH_INGREDIENTS_INIT action and call initIngredientsSaga,', ()=>{
            const generatedObject = watchBuilder();
            expect(generatedObject.next().value)
                .toEqual(takeEvery(BUILDER_ACTIONS.FETCH_INGREDIENTS_INIT, initIngredientsSaga));
        });
    });
    describe('watchOrder()', ()=>{
        test('It should watch for the latest FETCH_ORDERS_INIT action and call fetchOrdersSaga,', ()=>{
            const generatedObject = watchOrder();
            expect(generatedObject.next().value)
                .toEqual(takeLatest(ORDER_ACTIONS.FETCH_ORDERS_INIT, fetchOrdersSaga));
        });
        test('It should watch for the latest PURCHASE_INIT action and call purchaseCheesewichSaga,', ()=>{
            const generatedObject = watchOrder();
            generatedObject.next();
            expect(generatedObject.next().value)
                .toEqual(takeEvery(ORDER_ACTIONS.PURCHASE_INIT, purchaseCheesewichSaga));
        });
    });
});
