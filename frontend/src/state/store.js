import { authReducer } from '@/state/auth/Reducer';

const { legacy_createStore, applyMiddleware, combineReducers } = require('redux');
const { thunk } = require('redux-thunk');

const rootReducers = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
