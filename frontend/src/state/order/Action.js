import { api } from '@/config/apiConfig';
import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from '@/state/order/ActionType';

export const createOrder = (req) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {
    const { data } = await api.post('/api/orders', req.address);

    if (data.id) {
      req.navigate({ search: `step=3&order_id=${data.id}` });
    }

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: CREATE_ORDER_FAILURE, payload: e.message });
  }
};

export const getOrderById = (orderId) => async (dispatch) => {
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });

  try {
    const { data } = await api.get(`/api/orders/${orderId}`);

    console.log(data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: e.message });
  }
};
