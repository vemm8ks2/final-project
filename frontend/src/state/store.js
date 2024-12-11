import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { authReducer } from '@/state/auth/Reducer';
import { customerProductReducer } from '@/state/product/Reducer';
import { cartReducer } from '@/state/cart/Reducer';

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
