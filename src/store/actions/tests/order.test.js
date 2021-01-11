import * as order from '../order';
import * as actionTypes from '../actionTypes';

describe('actions/order.js', ()=>{
    describe('purchaseCheesewichSuccess()', ()=>{
        test('When given an id and orderData, it creates an action.', ()=>{
           const result =  order.purchaseCheesewichSuccess(123, {test: 'test'});
           const expectedResult = {
               type: actionTypes.PURCHASE_CHEESEWICH_SUCCESS,
               orderId: 123,
               orderData: {
                   test: 'test'
               },
           };
           expect(result).toEqual(expectedResult);
        });
    });
    describe('purchaseCheesewichFailed()', ()=>{
        test('When given an error, it creates an action.', ()=>{
           const result =  order.purchaseCheesewichFailed('error!');
           const expectedResult = {
               type: actionTypes.PURCHASE_CHEESEWICH_FAILED,
               error: 'error!',
           };
           expect(result).toEqual(expectedResult);
        });
    });
    describe('purchaseCheesewichStart()', ()=>{
        test('When invoked, it creates an action.', ()=>{
           const result =  order.purchaseCheesewichStart('error!');
           const expectedResult = {
               type: actionTypes.PURCHASE_CHEESEWICH_START,
           };
           expect(result).toEqual(expectedResult);
        });
    });
    describe('purchaseCheesewich()', ()=>{
        test('When given orderData and a token, it creates an action.', ()=>{
           // const orderData = {};
           // expect(result).toEqual(expectedResult);
        });
    });
    describe('purchaseInit()', ()=>{
        test('When invoked, it creates an action.', ()=>{
           const result =  order.purchaseInit();
           const expectedResult = {
               type: actionTypes.PURCHASE_INIT,
           };
           expect(result).toEqual(expectedResult);
        });
    });
    describe('fetchOrdersSuccess()', ()=>{
        test('When given orders, it creates an action.', ()=>{
            const someOrders = [{}, {}];
            const result =  order.fetchOrdersSuccess(someOrders);
            const expectedResult = {
                type: actionTypes.FETCH_ORDERS_SUCCESS,
                orders: someOrders,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('fetchOrdersFail()', ()=>{
        test('When given an error, it creates an action.', ()=>{
            const anError = 'error!!';
            const result =  order.fetchOrdersFail(anError);
            const expectedResult = {
                type: actionTypes.FETCH_ORDERS_FAIL,
                error: anError,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('fetchOrdersStart()', ()=>{
        test('When invoked, it creates an action.', ()=>{
            const result =  order.fetchOrdersStart();
            const expectedResult = {
                type: actionTypes.FETCH_ORDERS_START,
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('fetchOrders()', ()=>{
        test('When given a token and userId, it creates an action.', ()=>{
            const result =  order.fetchOrders({}, 123);
            const expectedResult = {};
            expect(result).toEqual(expectedResult);
        });
    });
});
