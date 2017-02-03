import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import loginApp from './reducers.js';
import createSagaMiddleware from 'redux-saga';
import saga from './sagas.js';
import createLogger from 'redux-logger';
import saveState from './saveState.js';

const sagaMiddleware = createSagaMiddleware();

const logger = createLogger();

const store = createStore(
    loginApp,
    applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(saga);

store.subscribe(() => {
    saveState(store.getState());
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
