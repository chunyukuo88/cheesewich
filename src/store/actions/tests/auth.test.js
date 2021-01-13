import { auth,
        authCheckState,
        authFail,
        authStart,
        authSuccess,
        checkAuthTimeout,
        logout,
        logoutDidOccur,
        setAuthRedirectPath } from '../auth';
import { AUTH_ACTIONS } from '../actionTypes';

describe('auth.js', ()=>{
    describe('auth()', ()=>{
        describe('WHEN: Given email, password, and an isSignup boolean', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const email = 'test@test.com';
                const password = 'password';
                const isSignup = true;
                const result = auth(email, password, isSignup);
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_USER,
                    email: email,
                    password: password,
                    isSignup: isSignup
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('authCheckState()', ()=>{
        describe('WHEN: Invoked, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const result = authCheckState();
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_CHECK_STATE,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('authFail()', ()=>{
        describe('WHEN: Given an error, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const error = 'error';
                const result = authFail(error);
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_FAIL,
                    error: error,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('authStart()', ()=>{
        describe('WHEN: Invoked, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const result = authStart();
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_START,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('authSuccess()', ()=>{
        describe('WHEN: Given an idToken and a userId, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const idToken = 'token';
                const userId = 'userId';
                const result = authSuccess(idToken, userId);
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_SUCCESS,
                    idToken: idToken,
                    userId: userId
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('checkAuthTimeout()', ()=>{
        describe('WHEN: Given an expirationTime, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const expirationTime = 10000;
                const result = checkAuthTimeout(expirationTime);
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_CHECK_TIMEOUT,
                    expirationTime: expirationTime
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('logout()', ()=>{
        describe('WHEN: Invoked, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const result = logout();
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_INITIATE_LOGOUT,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('logoutDidOccur()', ()=>{
        describe('WHEN: Invoked, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const result = logoutDidOccur();
                const expectedResult = {
                    type: AUTH_ACTIONS.AUTH_LOGOUT,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
    describe('setAuthRedirectPath()', ()=>{
        describe('WHEN: Given a path, ', ()=>{
            test('THEN: It builds the object accordingly', ()=>{
                const path = '/path';
                const result = setAuthRedirectPath(path);
                const expectedResult = {
                    type: AUTH_ACTIONS.SET_AUTH_REDIRECT_PATH,
                    path: path,
                };
                expect(result).toEqual(expectedResult);
            });
        });
    });
});
