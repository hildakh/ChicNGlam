import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
//redux-logger is the middleware to catch actions, console logs them before sending them to the reducer

import rootReducer from './root-reducer';

//store expects an array middleware from redux;

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persistor is a persisted version of the store and using it on the store would create a provider that wraps the application
const persistor = persistStore(store);

export default { store, persistor };