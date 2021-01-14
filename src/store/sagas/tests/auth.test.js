import { put, delay, call } from 'redux-saga/effects';
import { authCheckStateSaga, checkAuthTimeoutSaga } from '../auth';
import { logout } from '../../actions/auth';
import * as actions from "../../actions/auth";

describe('auth.js saga module', ()=>{
    describe('authCheckStateSaga()', ()=>{
        test('')
    });
    describe('checkAuthTimeoutSaga()', ()=>{
        describe('WHEN: Given an action with an expirationTime value,', ()=>{
           describe('AND: On its first invocation,', ()=>{
               test('THEN: It should yield an integer.', ()=>{
                  const action = {
                      expirationTime: 2,
                  };
                  const generatedObject = checkAuthTimeoutSaga(action);
                  expect(generatedObject.next().value).toEqual(delay(action.expirationTime * 1000));
               });
           });
           describe('AND: On its second invocation,', ()=>{
               test('THEN: It should dispatch a logout call.', ()=>{
                  const action = {
                      expirationTime: 2,
                  };
                  const generatedObject = checkAuthTimeoutSaga(action);
                   generatedObject.next()
                  expect(generatedObject.next().value).toEqual(put(actions.logout()));
               });
           });
        });
    });
});
