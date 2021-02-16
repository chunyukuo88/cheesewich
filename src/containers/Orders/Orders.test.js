import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import axios from '../../axios-orders';
import moxios from 'moxios';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import cheesewichBuilderReducer from '../../store/reducers/cheesewichBuilder';
import orderReducer from '../../store/reducers/order';
import authReducer from '../../store/reducers/auth';
import Root from '../../Root';
import Orders from '../Orders/Orders.jsx';

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
// const mockInitialState = { token: null, userId: null, error: null, loading: false, authRedirectPath: '/' };
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
            <Orders/>
        </Root>
    );
});

describe('Orders.jsx', ()=>{
    describe('Orders()', ()=>{
        test('It renders without crashing', ()=>{
            expect(wrapper.length).toEqual(1);
        });
    });
    describe('WHEN: There are no orders,', ()=>{
        test('No orders are displayed.', ()=>{

            expect(wrapper.length).toEqual(1);
        });
    });

});
