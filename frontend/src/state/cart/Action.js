import { api } from '@/config/apiConfig';
import {
  ADD_ITEM_TO_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  GET_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
} from '@/state/cart/ActionType';

export const getCart = () => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get('/api/cart');
    console.log(data);

    dispatch({ type: GET_CART_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_CART_FAILURE, payload: e.message });
  }
};

export const addItemToCart = (req) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });

  try {
    const { data } = await api.put('/api/cart/add', req);
    console.log(data);

    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: e.message });
  }
};

export const removeCartItem = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_CART_ITEM_REQUEST });

  try {
    await api.delete(`/api/cart-items/${cartItemId}`);

    dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId });
  } catch (e) {
    dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: e.message });
  }
};

export const updateCartItem = (req) => async (dispatch) => {
  dispatch({ type: UPDATE_CART_ITEM_REQUEST });

  try {
    const { data } = await api.put(`/api/cart-items/${req.cartItemId}`, req.data);

    dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: e.message });
  }
};
