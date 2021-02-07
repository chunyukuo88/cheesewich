import urls from '../../../urls';
import axios from 'axios';
import moxios from 'moxios';
import { fetchOrdersSaga, purchaseCheesewichSaga } from '../order';
import { put } from 'redux-saga/effects';
import * as actions from '../../actions/order';
import {ORDER_ACTIONS} from "../../actions/actionTypes";
import {runSaga} from "redux-saga";

async function listSagaDispatches(saga, initialAction){
    const dispatched = [];
    await runSaga(
        {
            dispatch: action => dispatched.push(action)
        },
        saga,
        initialAction
    ).done;
    return dispatched;
}

describe('sagas/order.js', ()=>{
    describe('fetchOrdersSaga()', ()=>{
        describe('WHEN: The user has no orders, ', ()=>{
            beforeEach(function () {
                jest.resetAllMocks();
                moxios.install();
                const url = `/orders.json?auth=123&orderBy="userId"&equalTo="456"`
                moxios.stubRequest(urls.axiosInstance + url, {
                   config: {},
                   data: {
                       order_001: {
                           ingredients: {cheese: 0, crunchybits: 1, marinara: 0, olives: 0},
                           orderData: {},
                           price: 0.5,
                           userId: '123'
                       }
                   },
                    headers: {},
                    request: {},
                    status: 200,
                    statusText: "OK"
                });
            });
            afterEach(function () {
                moxios.uninstall()
            });
            describe('WHEN: Happy path,', ()=>{
               it('dispatches the fetched orders to the store.', async ()=>{
                    const action = {
                        type: 'FETCH_ORDERS_INIT',
                        token: '123',
                        userId:'456'
                    };
                    const dispatched = await listSagaDispatches(fetchOrdersSaga, action);
                    expect(dispatched).toContainEqual(actions.fetchOrdersStart());
                    expect(dispatched.length).toEqual(1);
               });
            });
        });
    });
});
