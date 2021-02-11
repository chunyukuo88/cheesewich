import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../utils/testUtils';
import Auth from './Auth.jsx';
import Root from '../../Root';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import cheesewichBuilderReducer from '../../store/reducers/cheesewichBuilder';
import orderReducer from '../../store/reducers/order';
import authReducer from '../../store/reducers/auth';
import createSagaMiddleware from 'redux-saga';

Enzyme.configure({ adapter: new EnzymeAdapter()});

describe('Auth()', ()=>{
    describe('WHEN: The user clicks the switch button, ', ()=>{
        test('THEN: It switches to "sign up"', ()=>{
            const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

            const rootReducer = combineReducers({
                builder: cheesewichBuilderReducer,
                order: orderReducer,
                auth: authReducer
            });

            const sagaMiddleware = createSagaMiddleware();

            const store = createStore(rootReducer, composeEnhancers(
                applyMiddleware(sagaMiddleware)
            ));

            const wrapper = mount(
                <Root store={store}>
                    <Auth/>
                </Root>
            );
            const switcher = findByTestAttr(wrapper, 'switcher');
            expect(switcher.text()).toEqual('Switch to Sign up');
            switcher.simulate('click');
            expect(switcher.text()).toEqual('Switch to Sign in');
            switcher.simulate('click');
            expect(switcher.text()).toEqual('Switch to Sign up');
        });
    });
    describe('WHEN: The auth state is currently set to "loading," ', ()=>{
        test('THEN: It displays a spinner', ()=>{
            const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
            const mockInitialState = { token: null, userId: null, error: null, loading: true, authRedirectPath: '/' };
            const mockAuthReducer = (state = mockInitialState) => state;
            const rootReducer = combineReducers({
                builder: cheesewichBuilderReducer,
                order: orderReducer,
                auth: mockAuthReducer
            });
            const sagaMiddleware = createSagaMiddleware();
            const store = createStore(rootReducer, composeEnhancers(
                applyMiddleware(sagaMiddleware)
            ));
            const wrapper = mount(
                <Root store={store}>
                    <Auth/>
                </Root>
            );
            const spinner = findByTestAttr(wrapper, 'spinner');
            expect(spinner.length).toEqual(1);
        });
    });
});
