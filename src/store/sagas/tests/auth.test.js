import { put, delay, call } from 'redux-saga/effects';
import { authenticateUserSaga, checkAuthTimeoutSaga, logoutSaga } from '../auth';
import * as actions from '../../actions/auth';
import axios from "axios";
import urls from "../../../urls";

describe('auth.js saga module', ()=>{
    describe('authenticateUserSaga()', ()=>{
    describe('WHEN: Given a valid action, ', ()=>{
            test('THEN: On its first invocation, it commences authorization.', ()=>{
               const action = {
                   email: 'test@test.com',
                   password: 'password',
                   isSignup: true
               };
                const result = authenticateUserSaga(action);
                expect(result.next().value).toEqual(put(actions.authStart()));
            });
            test('THEN: On its second invocation, it sends authData to the back end with a POST request.', ()=>{
               const action = {
                   email: 'test@test.com',
                   password: 'password',
                   isSignup: true
               };
                const result = authenticateUserSaga(action);
                const authData = {
                    email: action.email,
                    password: action.password,
                    returnSecureToken: true,
                };
                result.next();
                expect(result.next().value).toEqual(axios.post(urls.authSignIn, authData));
            });
            test('THEN: On the ensuing three invocations, it sets local storage data.', ()=>{

                const action = {
                   email: 'test@test.com',
                   password: 'password',
                   isSignup: true
               };
                const result = authenticateUserSaga(action);
                result.next();
                result.next();
                expect(result.next().value).toEqual();
            });
        });
    });
    describe('WHEN: Given an invalid action, ', ()=>{
            test('THEN: It invokes the authFail function.', ()=>{
               //
            });
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
                  const mockLocalStorage = {};
                  const generatedObject = checkAuthTimeoutSaga(action, mockLocalStorage);
                  generatedObject.next()
                  expect(generatedObject.next().value).toEqual(put(actions.logout(mockLocalStorage)));
               });
           });
        });
    });
    describe('logoutSaga()', ()=>{
        describe('On its first invocation,', ()=>{
            test('THEN: It should remove the token from localStorage.', ()=>{
                const mockLocalStorage = {
                    removeItem: jest.fn(),
                };
                const action = {
                    storage: mockLocalStorage,
                };
                const generatedObject = logoutSaga(action);
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "token"));
            });
        });
        describe('AND: On its second invocation,', ()=>{
            test('THEN: It should remove the expirationDate from localStorage.', ()=>{
                            const mockLocalStorage = {
                removeItem: jest.fn(),
            };
            const action = {
                storage: mockLocalStorage,
            };
            const generatedObject = logoutSaga(action);
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "expirationDate"));
            });
        });
        describe('AND: On its third invocation,', ()=>{
            test('THEN: It should remove the userId from localStorage.', ()=>{
                            const mockLocalStorage = {
                removeItem: jest.fn(),
            };
            const action = {
                storage: mockLocalStorage,
            };
            const generatedObject = logoutSaga(action);
                generatedObject.next();
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(call([mockLocalStorage, 'removeItem'], "userId"));
            });
        });
        describe('AND: On its fourth (final) invocation,', ()=>{
            test('THEN: It should dispatch the logoutDidOccur function.', ()=>{
                            const mockLocalStorage = {
                removeItem: jest.fn(),
            };
            const action = {
                storage: mockLocalStorage,
            };
            const generatedObject = logoutSaga(action);
                generatedObject.next();
                generatedObject.next();
                generatedObject.next();
                expect(generatedObject.next().value)
                    .toEqual(put(actions.logoutDidOccur()));
            });
        });
    });
