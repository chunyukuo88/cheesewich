import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import cheesewichBuilderReducer from './store/reducers/cheesewichBuilder';
import orderReducer from './store/reducers/order';

const rootReducer = combineReducers({
    builder: cheesewichBuilderReducer,
    order: orderReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
