import { api } from '@/config/apiConfig';
import {
  CREATE_PAYMENT_FAILURE,
  CREATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_REQUEST,
} from './ActionType';

export const createPayment = (req) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });

  try {
    const { data } = await api.post(`/api/payments/${req.orderId}`, req);

    if (data.payment_link_url) {
      location.href = data.payment_link_url;
    }
  } catch (e) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, playload: e.message });
  }
};

export const updatePayment = (req) => async (dispatch) => {
  dispatch({ type: UPDATE_PAYMENT_REQUEST });

  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${req.orderId}&order_id=${req.orderId}`
    );

    console.log('update payment : ', data);
  } catch (e) {
    dispatch({ type: UPDATE_PAYMENT_REQUEST, playload: e.message });
  }
};
