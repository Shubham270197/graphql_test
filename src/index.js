import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import rootSaga from '../src/saga/index';
import {composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers,composeWithDevTools(applyMiddleware(sagaMiddleware))) 
sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,
    document.querySelector('#root')
);