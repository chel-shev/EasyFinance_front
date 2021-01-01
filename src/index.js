import React from 'react';
import './index.scss';
import App from './App';
import quotesApp from './redux/reducers'
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import api from './api/api'
import {render} from 'react-dom'
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension/logOnlyInProduction';

const composeEnhancers = composeWithDevTools({});

let store = createStore(quotesApp, composeEnhancers(applyMiddleware(thunkMiddleware, api)))

let rootElement = document.getElementById('root')

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    rootElement
);
