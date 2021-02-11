import React from 'react';
import Logout from './Logout';
import Enzyme, {mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { findByTestAttr } from '../../../utils/testUtils';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import cheesewichBuilderReducer from "../../../store/reducers/cheesewichBuilder";
import orderReducer from "../../../store/reducers/order";
import authReducer from "../../../store/reducers/auth";
import Root from "../../../Root";
import {BrowserRouter} from "react-router-dom";
Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
const props = {};
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
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
            <BrowserRouter>
                <Logout {...props}/>
            </BrowserRouter>
        </Root>
    );
});

describe('Logout()', () => {
    test('The component renders a Redirect without crashing.', ()=>{
        expect(wrapper.length).toEqual(1);
    });
});
