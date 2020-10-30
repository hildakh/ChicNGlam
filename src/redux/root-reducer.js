import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer'; 

// possible config for the redux persist to use
const persistConfig = {
  // where inside the reducer object we plan to store everything
  key: 'root',
  // same key same value
  storage,
  // array of strings of any of the reducers that we want to store, since user is being handled by firebase authentication, no need to persist it >> no need to add it to this array
  whitelist: ['cart']
}

// had to rename combineReducers to rootReducer and wrap it with the persistReducer
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

//  exported modified version of the rootReducer with persistance capability
export default persistReducer(persistConfig,rootReducer);