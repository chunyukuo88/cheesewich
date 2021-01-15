import { put, delay, call } from 'redux-saga/effects';
import { authCheckStateSaga, checkAuthTimeoutSaga, logoutSaga } from '../auth';
import * as actions from '../../actions/auth';

describe('auth.js saga module', ()=>{
    describe('authCheckStateSaga()', ()=>{
        test('', ()=>{
           //
        });
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
           describe('AND: On its second (final) invocation,', ()=>{
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
    describe('logoutSaga()', ()=>{
                const mockLocalStorage = {
                    removeItem: jest.fn(),
                };
                const action = {
                    storage: mockLocalStorage,
                };
                const generatedObject = logoutSaga(action);
        describe('On its first invocation,', ()=>{
            test('THEN: It should remove the token from localStorage.', ()=>{
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "token"));
            });
        });
        describe('AND: On its second invocation,', ()=>{
            test('THEN: It should remove the expirationDate from localStorage.', ()=>{
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "expirationDate"));
            });
        });
        describe('AND: On its third invocation,', ()=>{
            test('THEN: It should remove the userId from localStorage.', ()=>{
                generatedObject.next();
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "userId"));
            });
        });
        describe('AND: On its fourth (final) invocation,', ()=>{
            test('THEN: It should dispatch the logoutDidOccur function.', ()=>{
                generatedObject.next();
                generatedObject.next();
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(put(actions.logoutDidOccur()));
            });
        });
    });
});
