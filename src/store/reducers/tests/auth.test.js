import reducer from '../auth';
import { AUTH_ACTIONS } from '../../actions/actionTypes';

const initialState = {
    token: null,
    userId: null,
    error: null,
    loading: false,
    authRedirectPath: '/',
};

describe('reducer()', ()=>{
    describe('WHEN: Given no state and an invalid action,', ()=>{
        test('THEN: It returns the state it was given.', ()=> {
            const action = {};
            const result = reducer(undefined, action);
            expect(result).toEqual(initialState);
        });
    });
    describe('WHEN: Given an action type of AUTH_START,', ()=>{
        test('THEN: The state is update accordingly.', ()=>{
            const action = { type: AUTH_ACTIONS.AUTH_START};
            const result = reducer(initialState, action);
            const expectedResult = {
                token: null,
                userId: null,
                error: null,
                loading: true, //
                authRedirectPath: '/',
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of AUTH_SUCCESS,', ()=>{
        test('THEN: The state is update accordingly.', ()=>{
            const action = {
                type: AUTH_ACTIONS.AUTH_SUCCESS,
                idToken: {
                    foo: 'bar'
                },
                userId: 456,
            };
            const result = reducer(initialState, action);
            const expectedResult = {
                token: action.idToken,
                userId: action.userId,
                error: null,
                loading: false,
                authRedirectPath: '/',
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of AUTH_FAIL,', ()=>{
        test('THEN: The state is update accordingly.', ()=>{
            const action = {
                type: AUTH_ACTIONS.AUTH_FAIL,
                error: 'error!!'
            };
            const result = reducer(initialState, action);
            const expectedResult = {
                token: null,
                userId: null,
                error: 'error!!',
                loading: false,
                authRedirectPath: '/',
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of AUTH_LOGOUT,', ()=>{
        test('THEN: The state is update accordingly.', ()=>{
            const action = {
                type: AUTH_ACTIONS.AUTH_LOGOUT,
            };
            const result = reducer(initialState, action);
            const expectedResult = {
                userId: null,
                token: null,
                error: null,
                loading: false,
                authRedirectPath: '/',
            };
            expect(result).toEqual(expectedResult);
        });
    });
    describe('WHEN: Given an action type of SET_AUTH_REDIRECT_PATH,', ()=>{
        test('THEN: The state is update accordingly.', ()=>{
            const action = {
                type: AUTH_ACTIONS.SET_AUTH_REDIRECT_PATH,
                path: '/test',
            };
            const result = reducer(initialState, action);
            initialState.authRedirectPath = '/test';
            expect(result).toEqual(initialState);
        });
    });
});
