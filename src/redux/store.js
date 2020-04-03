import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
//redux-logger is the middleware to catch actions, console logs them before sending them to the reducer

import rootReducer from './root-reducer';

//store expects an array middleware from redux;

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;