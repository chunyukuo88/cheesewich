import urls from '../../../urls';
import axios from '../../../axios-orders';
import moxios from 'moxios';
import { fetchOrdersSaga, purchaseCheesewichSaga } from '../order';
import { put } from 'redux-saga/effects';
import * as actions from '../../actions/order';
import {ORDER_ACTIONS} from "../../actions/actionTypes";


describe('sagas/order.js', ()=>{
    describe('fetchOrdersSaga()', ()=>{
        describe('WHEN: The user has no orders, ', ()=>{
            beforeEach(function () {
                moxios.install();
                moxios.stubRequest(urls.axiosInstance, {}); // Empty response since there are no orders.
            });
            afterEach(function () {
                moxios.uninstall()
            });
            describe('WHEN: Given a valid action,', ()=>{
               test('It yields the fetchOrdersSuccess action creator.', ()=>{

                    // expect(result).toEqual(expectedResult);
               });
            });
            describe('WHEN: Given an invalid action,', ()=>{
               test('It yields the fetchOrdersFail action creator.', ()=>{

                    // expect(result).toEqual(expectedResult);
               });
            });
        });
    });
});
