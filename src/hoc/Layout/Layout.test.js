import React from 'react';
import Layout from './Layout';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../src/utils/testUtils';
import { Provider } from "react-redux";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import cheesewichBuilderReducer from "../../store/reducers/cheesewichBuilder";
import orderReducer from "../../store/reducers/order";
import authReducer from "../../store/reducers/auth";
import createSagaMiddleware from "redux-saga";

Enzyme.configure({ adapter: new Adapter() });

const rootReducer = combineReducers({
    builder: cheesewichBuilderReducer,
    order: orderReducer,
    auth: authReducer
});

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk, sagaMiddleware)
));

const setup = () => Enzyme.render(
    <Provider store={store}>
        <Layout/>
    </Provider>
);

describe('Layout.js', ()=>{
    test('The Layout component rendered renders without error.', ()=>{
        const wrapper = setup();
        expect(wrapper.length).toBe(1);
    });
    test('The overview text is rendered.', ()=>{
        const wrapper = setup();
        const component = findByTestAttr(wrapper, 'layout-overview');
        expect(component.length).toBe(1);
    });
});
