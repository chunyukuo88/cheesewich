import reducer from '../order';
import * as actionTypes from '../../actions/actionTypes';

const state = {
    orders: [],
    loading: false,
    purchaseHasBeenMade: false,
};

describe('reducer()', ()=>{
   describe('WHEN: Given no state and an invalid action,', ()=>{
      test('THEN: It returns the state it was given.', ()=>{
          const action = {};
          const result = reducer(undefined, action);
          const expectedResult = {
              orders: [],
              loading: false,
              purchaseHasBeenMade: false,
          };
          expect(result).toEqual(expectedResult);
      });
   });
   describe('WHEN: Given an action type of PURCHASE_CHEESEWICH_START,', ()=>{
      test('THEN: The state is updated to loading: true.', ()=>{
          const action = { type: actionTypes.PURCHASE_CHEESEWICH_START};
          const result = reducer(state, action);
          const expectedResult = {
              orders: [],
              loading: true,
              purchaseHasBeenMade: false,
          };
          expect(result).toEqual(expectedResult);
      });
   });
   describe('WHEN: Given an action type of PURCHASE_CHEESEWICH_SUCCESS,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.PURCHASE_CHEESEWICH_SUCCESS,
              orderData: {},
              orderId: 123
          };
          const result = reducer(state, action);
          const expectedResult = {
              loading: false,
              orders: [{
                id: 123,
              }],
              purchaseHasBeenMade: true,
          };
          expect(result).toEqual(expectedResult);
      });
   });
   describe('WHEN: Given an action type of PURCHASE_CHEESEWICH_FAILED,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.PURCHASE_CHEESEWICH_FAILED,
          };
          const result = reducer(state, action);
          expect(result).toEqual(state);
      });
   });
   describe('WHEN: Given an action type of PURCHASE_INIT,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.PURCHASE_INIT,
          };
          const result = reducer(state, action);
          expect(result).toEqual(state);
      });
   });
   describe('WHEN: Given an action type of FETCH_ORDERS_START,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.FETCH_ORDERS_START,
          };
          const result = reducer(state, action);
          const expectedResult = {
              orders: [],
              loading: true,
              purchaseHasBeenMade: false,
          };
          expect(result).toEqual(expectedResult);
      });
   });
   describe('WHEN: Given an action type of FETCH_ORDERS_SUCCESS,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.FETCH_ORDERS_SUCCESS,
              orders: [{}, {}],
          };
          const result = reducer(state, action);
          const expectedResult = {
              orders: [{}, {}],
              loading: false,
              purchaseHasBeenMade: false,
          };
          expect(result).toEqual(expectedResult);
      });
   });
   describe('WHEN: Given an action type of FETCH_ORDERS_FAIL,', ()=>{
      test('THEN: The new order is added to state.', ()=>{
          const action = {
              type: actionTypes.FETCH_ORDERS_FAIL,
          };
          const result = reducer(state, action);
          expect(result).toEqual(state);
      });
   });
});
