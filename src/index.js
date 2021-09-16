import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk'
import App from './App';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = [thunk];

const initialState = {
  test: {},
};

ReactDOM.render(
    <Provider store={createStore(
        reducers,
        initialState,
        composeWithDevTools(
            applyMiddleware(...middleware) // enable dev tools im browser
        )
    )}>
        <App />
    </Provider>,
  document.getElementById('root')
);
