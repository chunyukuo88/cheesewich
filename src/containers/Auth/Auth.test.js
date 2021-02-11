import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../utils/testUtils';
import Auth from './Auth.jsx';
import Root from '../../Root';
import Button from '../../components/UI/Button/Button';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import cheesewichBuilderReducer from '../../store/reducers/cheesewichBuilder';
import orderReducer from '../../store/reducers/order';
import authReducer from '../../store/reducers/auth';
import createSagaMiddleware from 'redux-saga';

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const mockInitialState = { token: null, userId: null, error: null, loading: false, authRedirectPath: '/' };
const sagaMiddleware = createSagaMiddleware();

beforeEach(()=>{
    const rootReducer = combineReducers({
        builder: cheesewichBuilderReducer,
        order: orderReducer,
        auth: authReducer
    });
    const store = createStore(rootReducer, composeEnhancers(
        applyMiddleware(sagaMiddleware)
    ));
    wrapper = mount(
        <Root store={store}>
            <Auth/>
        </Root>
    );
});

describe('Auth()', ()=>{
    test('The component renders without crashing', ()=>{
       expect(wrapper.length).toEqual(1);
    });
    test('The form contains two inputs and a button', ()=>{
       const form = findByTestAttr(wrapper, 'form');
       expect(form.children().length).toEqual(3);
    });
    test('The component contains two buttons', ()=>{
        const buttons = wrapper.find(Button);
        expect(buttons.length).toEqual(2);
    });
    describe('WHEN: The user clicks the switch button, ', ()=>{
        test('THEN: It switches between "sign in" and "sign up"', ()=>{
            const switcher = findByTestAttr(wrapper, 'switcher');
            expect(switcher.text()).toEqual('Switch to Sign up');
            switcher.simulate('click');
            expect(switcher.text()).toEqual('Switch to Sign in');
            switcher.simulate('click');
            expect(switcher.text()).toEqual('Switch to Sign up');
        });
    });
    describe('WHEN: The auth state is currently set to "loading," ', ()=>{
        mockInitialState.loading = true;
        const mockAuthReducer = (state = mockInitialState) => state;
        const rootReducer = combineReducers({
            builder: cheesewichBuilderReducer,
            order: orderReducer,
            auth: mockAuthReducer
        });
        const store = createStore(rootReducer, composeEnhancers(
            applyMiddleware(sagaMiddleware)
        ));
        const wrapper = mount(
            <Root store={store}>
                <Auth/>
            </Root>
        );
        test('THEN: It displays a spinner', ()=>{
            const spinner = findByTestAttr(wrapper, 'spinner');
            expect(spinner.length).toEqual(1);
        });
    });
    describe('WHEN: There is an error, ', ()=>{
        mockInitialState.error = true;
        const mockAuthReducer = (state = mockInitialState) => state;
        const rootReducer = combineReducers({
            builder: cheesewichBuilderReducer,
            order: orderReducer,
            auth: mockAuthReducer
        });
        const store = createStore(rootReducer, composeEnhancers(
            applyMiddleware(sagaMiddleware)
        ));
        const wrapper = mount(
            <Root store={store}>
                <Auth/>
            </Root>
        );
        test('THEN: It displays the error', ()=>{
            const error = findByTestAttr(wrapper, 'auth-error');
            expect(error.length).toEqual(1);
        });
    });
    describe('WHEN: There is NO error, ', ()=>{
        mockInitialState.error = false;
        const mockAuthReducer = (state = mockInitialState) => state;
        const rootReducer = combineReducers({
            builder: cheesewichBuilderReducer,
            order: orderReducer,
            auth: mockAuthReducer
        });
        const store = createStore(rootReducer, composeEnhancers(
            applyMiddleware(sagaMiddleware)
        ));
        const wrapper = mount(
            <Root store={store}>
                <Auth/>
            </Root>
        );
        test('THEN: It does not display the error', ()=>{
            const error = findByTestAttr(wrapper, 'auth-error');
            expect(error.length).toEqual(0);
        });
    });
});
