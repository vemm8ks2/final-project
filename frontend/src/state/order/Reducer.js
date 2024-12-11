import {
  CREATE_ORDER_FAILURE,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
} from '@/state/order/ActionType';

const initState = {
  orders: [],
  order: null,
  error: null,
  loading: false,
};

export const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ORDER_BY_ID_REQUEST:
    case CREATE_ORDER_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_ORDER_BY_ID_FAILURE:
    case CREATE_ORDER_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, loading: false, order: action.payload, error: null };

    case CREATE_ORDER_SUCCESS:
      return { ...state, loading: false, success: true, order: action.payload, error: null };

    default:
      return state;
  }
};
