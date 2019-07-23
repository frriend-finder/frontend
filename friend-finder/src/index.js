import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import logger from 'redux-logger';

import rootReducer from './reducers';

import 'bootstrap/dist/css/bootstrap.min.css';

// create store
const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger)
);

// render
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
    );