import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
import {createPromise} from 'redux-promise-middleware'

import createReducer from './reducers';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const middlewares = [
    createPromise({
        promiseTypeSuffixes: ['START', 'SUCCESS', 'FAIL'],
    }),
];

const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),

    // other store enhancers if any
);

const store = createStore(createReducer, enhancer);

export default store;