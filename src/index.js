import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import Root from './Root';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchAuth, watchOrder, watchBuilder } from './store/sagas';

import cheesewichBuilderReducer from './store/reducers/cheesewichBuilder';
import orderReducer from './store/reducers/order';
import authReducer from './store/reducers/auth';

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

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchOrder);
sagaMiddleware.run(watchBuilder);

const app = (
    <Root store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Root>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
